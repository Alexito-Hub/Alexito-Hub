/**
 * ============================================================
 * NEXUS // CORE HUD — Portafolio Alexito-Hub (portfolio_b)
 * Consola Central de Doble Columna estilo Spotlight/HUD +
 * Núcleo Cibernético SVG + Modo Thinking estilo Claude
 * ============================================================
 */
(function () {
  'use strict';

  const AZURE_API_BASE_URL =
    window.location.protocol === 'file:' ||
    !window.location.hostname ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
      ? 'http://localhost:8080'
      : '';
  const PORTFOLIO_ID = 'portfolio_b';
  const DEVICE_STORAGE_KEY = 'chatbot_device_id';

  let portfolioData = null;
  let chunksIndex = [];
  let isOpen = false;
  let isPending = false;
  let lastDetectedWeek = null;
  const cmdHistory = [];
  let historyPos = -1;
  const responseCache = new Map();

  // Ilustración vectorial de Cabeza Mecha-Cibernética Angular (exclusiva de Alexito-Hub)
  const NEXUS_MECHA_SVG = `
    <svg class="nexus-mecha-svg" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="nexusHudGrad" x1="8" y1="8" x2="84" y2="84" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="50%" stop-color="#6366f1"/>
          <stop offset="100%" stop-color="#10b981"/>
        </linearGradient>
        <linearGradient id="nexusArmor" x1="20" y1="16" x2="72" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#070b14"/>
        </linearGradient>
      </defs>
      <!-- Anillo táctico octogonal exterior -->
      <polygon class="nexus-svg-ring" points="46,4 76,16 88,46 76,76 46,88 16,76 4,46 16,16" stroke="url(#nexusHudGrad)" stroke-width="1.2" stroke-dasharray="8 4" opacity="0.5"/>
      <!-- Antenas superiores de telemetría -->
      <path d="M28 18L22 8M64 18L70 8" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="22" cy="8" r="2.2" fill="#10b981"/>
      <circle cx="70" cy="8" r="2.2" fill="#10b981"/>
      <!-- Casco angular cibernético -->
      <polygon points="46,13 71,24 75,52 62,74 46,80 30,74 17,52 21,24" fill="url(#nexusArmor)" stroke="url(#nexusHudGrad)" stroke-width="2"/>
      <!-- Placas laterales de enfriamiento -->
      <polygon points="17,36 10,40 10,54 18,56" fill="#10b981" opacity="0.85"/>
      <polygon points="75,36 82,40 82,54 74,56" fill="#38bdf8" opacity="0.85"/>
      <!-- Cresta frontal del procesador -->
      <polygon points="46,16 55,26 46,31 37,26" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
      <circle class="nexus-svg-core" cx="46" cy="24" r="2.4" fill="#10b981"/>
      <!-- Visor táctico panorámico -->
      <polygon points="24,36 46,40 68,36 65,49 46,52 27,49" fill="#040812" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Escáner óptico interior -->
      <rect class="nexus-svg-eye-l" x="30" y="40.5" width="11" height="4.2" rx="1" fill="#38bdf8"/>
      <rect class="nexus-svg-eye-r" x="51" y="40.5" width="11" height="4.2" rx="1" fill="#10b981"/>
      <!-- Rejilla vocal de ingeniería -->
      <path d="M35 61H57M38 66H54M41 71H51" stroke="#6366f1" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  `;

  const THINKING_HEX_SVG = `
    <svg class="upla-think-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="10,2 17,6 17,14 10,18 3,14 3,6" stroke="currentColor" stroke-width="1.5" stroke-dasharray="8 3"/>
      <circle cx="10" cy="10" r="2.3" fill="currentColor"/>
    </svg>
  `;

  const CHEVRON_SVG = `
    <svg class="upla-think-chevron" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.5 6.2L8 9.8L11.5 6.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  const EXEC_ICON_SVG = `
    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 3.5L12 8L5 12.5V3.5Z" fill="currentColor"/>
    </svg>
  `;

  const PHASE_LABELS = {
    INTENT: 'Análisis de consulta',
    RETRIEVAL: 'Módulo Java 17',
    SYNTHESIS: 'Síntesis técnica',
    COMMAND: 'Comando DOM'
  };

  function getOrCreateDeviceId() {
    try {
      const existing = window.localStorage.getItem(DEVICE_STORAGE_KEY);
      if (existing && /^[a-zA-Z0-9_-]{8,128}$/.test(existing.trim())) {
        return existing.trim();
      }
      const uuid =
        typeof window.crypto !== 'undefined' && typeof window.crypto.randomUUID === 'function'
          ? window.crypto.randomUUID()
          : 'dev-' + Date.now() + '-' + Math.random().toString(36).slice(2, 12);
      window.localStorage.setItem(DEVICE_STORAGE_KEY, uuid);
      return uuid;
    } catch (_) {
      return 'dev-fallback-' + Date.now();
    }
  }

  const deviceId = getOrCreateDeviceId();

  function normalize(str) {
    return String(str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9_.+\-\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function stripParentheses(str) {
    return String(str || '')
      .replace(/\(\s*\)/g, '')
      .replace(/\bO\(\s*1\s*\)/gi, 'orden constante')
      .replace(/\bO\(\s*n\s*\)/gi, 'orden lineal')
      .replace(/\bO\(\s*n\s*(?:\^2|²|2)\s*\)/gi, 'orden cuadrático')
      .replace(/\bO\(\s*n\s*log\s*n\s*\)/gi, 'orden log-lineal')
      .replace(/\s*\(([^()]+)\)/g, ' · $1')
      .replace(/[()]/g, '')
      .replace(/\s+·\s+·\s+/g, ' · ')
      .replace(/[ \t]{2,}/g, ' ')
      .trim();
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatInlineMarkdown(line) {
    return escapeHtml(stripParentheses(line))
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="cli-hl">$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="cli-code">$1</code>');
  }

  function formatOutput(text) {
    const cleaned = String(text || '')
      .split('\n')
      .map(l => stripParentheses(l))
      .join('\n')
      .trim();

    if (!cleaned) return '';

    const lines = cleaned.split('\n');
    const blocks = [];
    let listItems = [];

    function flushList() {
      if (listItems.length > 0) {
        blocks.push('<ul class="upla-msg-list">' + listItems.join('') + '</ul>');
        listItems = [];
      }
    }

    lines.forEach(rawLine => {
      const line = rawLine.trim();
      if (!line) {
        flushList();
        return;
      }

      if (/^(?:[-*•]|\d+\.)\s+/.test(line)) {
        const content = line.replace(/^(?:[-*•]|\d+\.)\s+/, '');
        listItems.push('<li>' + formatInlineMarkdown(content) + '</li>');
        return;
      }

      flushList();

      if (/^#{1,3}\s+/.test(line)) {
        const headingText = line.replace(/^#{1,3}\s+/, '');
        blocks.push('<h4 class="upla-msg-heading">' + formatInlineMarkdown(headingText) + '</h4>');
        return;
      }

      blocks.push('<p class="upla-msg-p">' + formatInlineMarkdown(line) + '</p>');
    });

    flushList();
    return blocks.join('');
  }

  function emptyCommand() {
    return {
      action: 'NONE',
      description: '',
      autoExecute: false,
      params: {
        page: '',
        unitId: '',
        weekId: '',
        exerciseId: '',
        imageUrl: '',
        imageTitle: '',
        galleryId: '',
        galleryIndex: 0,
        resourceUrl: ''
      }
    };
  }

  function buildModularChunks(data) {
    const chunks = [];
    if (!data || !data.cursos) return chunks;

    Object.entries(data.cursos).forEach(([courseKey, course]) => {
      const page = course.pagina || (courseKey === 'algoritmos' ? 'algoritmos.html' : 'taller.html');
      (course.unidades || []).forEach(u => {
        (u.entregas || []).forEach(ent => {
          const exercisesMap = {};
          let galleryCursor = 0;

          (ent.ejercicios || []).forEach((ej, idx) => {
            const ejNum = idx + 1;
            const mList = (ej.metodos || []).map(m => stripParentheses(m));
            const startIdx = galleryCursor;
            galleryCursor += mList.length;

            exercisesMap[ejNum] = {
              num: ejNum,
              titulo: stripParentheses(ej.titulo || `Ejercicio 0${ejNum}`),
              tema: stripParentheses(ej.tema || ''),
              explicacion: stripParentheses(ej.explicacion || ''),
              metodos: mList,
              galleryIndex: startIdx
            };
          });

          chunks.push({
            chunkId: `portfolio_b:${courseKey}:week_${ent.numero}`,
            courseKey,
            courseName: stripParentheses(course.nombre || courseKey),
            page,
            unitId: u.id,
            unitTitle: stripParentheses(u.titulo),
            id: ent.id,
            num: ent.numero,
            semana: stripParentheses(ent.semana || `Semana 0${ent.numero}`),
            nombre: stripParentheses(ent.nombre || ''),
            tema: stripParentheses(ent.tema || ent.nombre || ''),
            resumen: stripParentheses(ent.resumenChatbot || ''),
            explicacion: stripParentheses(ent.explicacionTecnica || ent.resumenChatbot || ''),
            releaseUrl: ent.releaseUrl || '',
            url: ent.url || '',
            imgCount: (ent.imagenes || []).length,
            exercisesMap
          });
        });
      });
    });

    return chunks;
  }

  function executeDomCommand(cmd, clearTerminalFn) {
    if (!cmd || !cmd.action || cmd.action === 'NONE') return;
    const p = cmd.params || {};

    if (cmd.action === 'CLEAR_TERMINAL') {
      if (typeof clearTerminalFn === 'function') clearTerminalFn();
      return;
    }

    if (cmd.action === 'OPEN_VISUAL_VIEWER') {
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const startIndex = typeof p.galleryIndex === 'number' && p.galleryIndex >= 0 ? p.galleryIndex : 0;

      if (p.page && currentPage !== p.page && !(currentPage === '' && p.page === 'index.html')) {
        if (typeof window.navigateToDeliveryTarget === 'function') {
          window.navigateToDeliveryTarget({
            page: p.page,
            unitId: p.unitId,
            deliveryId: p.galleryId || p.weekId,
            openGallery: true,
            startIndex
          });
          return;
        }
      }

      if (typeof window.navigateToDeliveryTarget === 'function' && (p.weekId || p.galleryId)) {
        window.navigateToDeliveryTarget({
          page: p.page,
          unitId: p.unitId,
          deliveryId: p.galleryId || p.weekId,
          openGallery: false
        });
      }

      if ((p.galleryId || p.weekId) && typeof window.openGalleryByDeliveryId === 'function') {
        setTimeout(() => {
          window.openGalleryByDeliveryId(p.galleryId || p.weekId, startIndex);
        }, 200);
      }
      return;
    }

    if (cmd.action === 'NAVIGATE_WEEK') {
      if (typeof window.navigateToDeliveryTarget === 'function') {
        window.navigateToDeliveryTarget({
          page: p.page || 'algoritmos.html',
          unitId: p.unitId,
          deliveryId: p.weekId || p.galleryId,
          openGallery: false
        });
      } else if (p.page) {
        window.location.href = p.page;
      }
      return;
    }

    if ((cmd.action === 'OPEN_EXTERNAL_URL' || cmd.action === 'DOWNLOAD_RESOURCE') && p.resourceUrl) {
      window.open(p.resourceUrl, '_blank', 'noopener,noreferrer');
    }
  }

  function evaluateModularCommand(rawInput) {
    const q = normalize(rawInput);
    if (!q) return { thinking: [], message: '', command: emptyCommand(), suggested_actions: [] };

    if (q === 'clear' || q === 'cls') {
      return {
        thinking: [],
        message: '',
        command: { ...emptyCommand(), action: 'CLEAR_TERMINAL', autoExecute: true },
        suggested_actions: []
      };
    }

    const cacheKey = `${lastDetectedWeek || 0}:${q}`;
    if (responseCache.has(cacheKey)) {
      return responseCache.get(cacheKey);
    }

    const est = (portfolioData && portfolioData.estudiante) || {};
    const tech = (portfolioData && portfolioData.conocimientoTecnico) || {};

    const wantsGallery = /\b(abrir galeria|ver galeria|mostrar galeria|ver captura|abrir captura|open)\b/.test(q);
    const wantsNav = /\b(ir a|ubicar|navegar|abrir semana)\b/.test(q);
    const autoExec = wantsGallery || wantsNav;

    const wMatch = q.match(/\b(?:semana|sem|s)\s*0?([1-9]|1[0-6])\b/);
    const eMatch = q.match(/\b(?:ejercicio|ej)\s*0?([1-9]|10)\b/);
    let weekNum = wMatch ? parseInt(wMatch[1], 10) : null;
    let ejNum = eMatch ? parseInt(eMatch[1], 10) : null;

    if (weekNum === null) {
      if (/\b(gestorcolaalumnos|invertirorden|posicion|darbaja)\b/.test(q)) { weekNum = 7; ejNum = ejNum || 1; }
      else if (/\b(gestorturnos|nodoticket|reporteportramite)\b/.test(q)) { weekNum = 7; ejNum = ejNum || 2; }
      else if (/\b(gestorpedidos|nodoorden|montoacumulado|centinela)\b/.test(q)) { weekNum = 7; ejNum = ejNum || 3; }
      else if (/\b(cola|colas|fifo)\b/.test(q)) { weekNum = 7; }
      else if (/\b(pila|pilas|lifo|push|pop|postfija)\b/.test(q)) { weekNum = 6; }
      else if (/\b(arraylist)\b/.test(q)) { weekNum = 5; }
      else if (/\b(objetos)\b/.test(q)) { weekNum = 4; }
      else if (/\b(paralelos)\b/.test(q)) { weekNum = 3; }
      else if (/\b(bidimensional|matriz)\b/.test(q)) { weekNum = 1; }
      else if (ejNum !== null && lastDetectedWeek !== null) {
        weekNum = lastDetectedWeek;
      }
    }

    const isTaller = /\b(taller|figma|wireframe|prototipo|login)\b/.test(q);
    if (isTaller && weekNum === null) weekNum = 2;

    if (weekNum !== null) {
      lastDetectedWeek = weekNum;
      const courseTarget = isTaller ? 'taller' : 'algoritmos';
      const chunk =
        chunksIndex.find(c => c.courseKey === courseTarget && c.num === weekNum) ||
        chunksIndex.find(c => c.num === weekNum);

      if (chunk) {
        if (ejNum !== null && chunk.exercisesMap[ejNum]) {
          const ej = chunk.exercisesMap[ejNum];
          const cmd = {
            action: 'OPEN_VISUAL_VIEWER',
            description: `Abrir galería en ${chunk.semana} · ${ej.titulo}`,
            autoExecute: autoExec,
            params: {
              page: chunk.page,
              unitId: chunk.unitId,
              weekId: chunk.id,
              exerciseId: `ej-${ejNum}`,
              imageUrl: '',
              imageTitle: `${chunk.semana} · ${ej.titulo}`,
              galleryId: chunk.id,
              galleryIndex: ej.galleryIndex,
              resourceUrl: chunk.releaseUrl
            }
          };

          const mLine = ej.metodos.length
            ? `\n- **Métodos documentados:** \`${ej.metodos.join('`, `')}\`.`
            : '';

          const result = {
            thinking: [
              { step: 1, phase: 'INTENT', detail: `Consulta puntual sobre ${chunk.semana} · ${ej.titulo}` },
              { step: 2, phase: 'RETRIEVAL', detail: `Cargado módulo ${chunk.chunkId} desde el índice modular` },
              { step: 3, phase: 'SYNTHESIS', detail: `Estructurando análisis técnico en Java 17` },
              { step: 4, phase: 'COMMAND', detail: `Posicionando galería en la diapositiva ${ej.galleryIndex + 1}` }
            ],
            message: `### ${chunk.semana} · ${ej.titulo}\n\n${ej.explicacion}\n\n- **Arquitectura:** ${ej.tema}.${mLine}`,
            command: cmd,
            suggested_actions: [
              { label: `Resumen de ${chunk.semana}`, type: 'prompt', target: `sem ${chunk.num}` }
            ]
          };
          responseCache.set(cacheKey, result);
          return result;
        }

        const cmd = chunk.url
          ? {
              action: 'OPEN_EXTERNAL_URL',
              description: 'Abrir prototipo en Figma',
              autoExecute: autoExec,
              params: { ...emptyCommand().params, page: chunk.page, resourceUrl: chunk.url }
            }
          : {
              action: wantsNav ? 'NAVIGATE_WEEK' : 'OPEN_VISUAL_VIEWER',
              description: wantsNav ? `Ir a ${chunk.semana}` : `Abrir galería de ${chunk.semana} · ${chunk.imgCount} capturas`,
              autoExecute: autoExec,
              params: {
                page: chunk.page,
                unitId: chunk.unitId,
                weekId: chunk.id,
                exerciseId: '',
                imageUrl: '',
                imageTitle: `${chunk.semana} · ${chunk.nombre}`,
                galleryId: chunk.id,
                galleryIndex: 0,
                resourceUrl: chunk.releaseUrl
              }
            };

        const ejBullets = Object.values(chunk.exercisesMap)
          .map(e => `- **${e.titulo} · ${e.tema}:** ${e.explicacion}`)
          .join('\n');

        const result = {
          thinking: [
            { step: 1, phase: 'INTENT', detail: `Analizando entrega ${chunk.semana} · ${chunk.nombre}` },
            { step: 2, phase: 'RETRIEVAL', detail: `Recuperado fragmento ${chunk.chunkId}` },
            { step: 3, phase: 'SYNTHESIS', detail: `Sintetizando arquitectura Java 17 y ejercicios` },
            { step: 4, phase: 'COMMAND', detail: `Preparado comando ${cmd.action}` }
          ],
          message: `### ${chunk.semana} · ${chunk.nombre}\n\n${chunk.explicacion}\n\n${ejBullets}`,
          command: cmd,
          suggested_actions: chunk.exercisesMap[1]
            ? [{ label: `Analizar Ejercicio 1 de ${chunk.semana}`, type: 'prompt', target: `sem ${chunk.num} ej 1` }]
            : []
        };
        responseCache.set(cacheKey, result);
        return result;
      }
    }

    if (/\b(complejidad|big o|notacion)\b/.test(q)) {
      const c = tech.complejidades || {};
      return {
        thinking: [
          { step: 1, phase: 'INTENT', detail: 'Análisis transversal de eficiencia algorítmica' },
          { step: 2, phase: 'RETRIEVAL', detail: 'Cargado módulo técnico portfolio_b:technical' }
        ],
        message:
          `### Análisis de Eficiencia en Java 17\n\n` +
          `- **Matrices en Semanas 01 y 02:** ${stripParentheses(c.arreglos_bidimensionales || 'Recorrido cuadrático sobre filas y columnas')}\n` +
          `- **Arreglos Paralelos y Objetos en Semanas 03 y 04:** Inserción en orden constante y ordenamiento cuadrático.\n` +
          `- **ArrayList en Semana 05:** Acceso indexado en orden constante y filtrado lineal.\n` +
          `- **Pilas y Colas en Semanas 06 y 07:** Operaciones principales en orden constante mediante punteros y aritmética circular.`,
        command: emptyCommand(),
        suggested_actions: [{ label: 'Analizar Semana 07 · Colas', type: 'prompt', target: 'sem 7' }]
      };
    }

    if (/\b(whoami|autor|alessandro|villogas|alexito|perfil|upla|docente)\b/.test(q)) {
      return {
        thinking: [
          { step: 1, phase: 'INTENT', detail: 'Consulta de autoría y perfil de ingeniería' },
          { step: 2, phase: 'RETRIEVAL', detail: 'Cargado módulo portfolio_b:profile' }
        ],
        message:
          `### Perfil de Ingeniería\n\n` +
          `Repositorio desarrollado por **${stripParentheses(est.nombre || 'Alessandro Villogas Gaspar')}** · **${stripParentheses(est.usuario || 'Alexito-Hub')}**.\n\n` +
          `- **Carrera:** ${stripParentheses(est.carrera || 'Ingeniería de Sistemas y Computación')} · ${stripParentheses(est.ciclo || 'Ciclo IV')} en UPLA Huancayo.\n` +
          `- **Docente de Algoritmos:** Mg. Raúl Enrique Fernández Bejarano.`,
        command: {
          action: 'NAVIGATE_WEEK',
          description: 'Ir al Perfil Académico',
          autoExecute: wantsNav,
          params: { ...emptyCommand().params, page: 'perfil.html' }
        },
        suggested_actions: []
      };
    }

    return {
      thinking: [
        { step: 1, phase: 'INTENT', detail: 'Interpretando consulta técnica sobre el repositorio' }
      ],
      message:
        `Soy **Nexus**, núcleo de análisis de código del portafolio de Alessandro. Selecciona cualquier nodo semanal en la matriz izquierda o escribe una consulta sobre Java 17.\n\n` +
        `- Prueba consultar por \`GestorColaAlumnos\`, \`GestorTurnos\` o \`GestorPedidos\`.\n` +
        `- También puedes pedir abrir la galería de cualquier semana y ejercicio.`,
      command: emptyCommand(),
      suggested_actions: [
        { label: 'Comparar GestorPedidos y GestorTurnos', type: 'prompt', target: 'Comparame GestorPedidos y GestorTurnos en la semana 7' },
        { label: 'Abrir galería Semana 07 · Ejercicio 3', type: 'prompt', target: 'abrir galeria sem 7 ej 3' }
      ]
    };
  }

  async function hydrateFromAzure(writeEntryFn) {
    const baseUrl = AZURE_API_BASE_URL.replace(/\/+$/, '');
    if (!baseUrl) return;
    try {
      const url = `${baseUrl}/api/chat/history?portfolioId=${encodeURIComponent(PORTFOLIO_ID)}&deviceId=${encodeURIComponent(deviceId)}`;
      const res = await fetch(url, { method: 'GET', headers: { Accept: 'application/json' } });
      if (!res.ok) return;
      const data = await res.json();
      if (data && Array.isArray(data.turns) && data.turns.length > 0) {
        let pendingUserMsg = '';
        data.turns.forEach(turn => {
          if (turn.role === 'user') {
            pendingUserMsg = turn.message;
          } else {
            writeEntryFn(
              pendingUserMsg || 'consulta',
              turn.message,
              turn.thinking || [],
              turn.command || emptyCommand(),
              turn.suggested_actions || [],
              false,
              1.3
            );
            pendingUserMsg = '';
          }
        });
      }
    } catch (_) {}
  }

  async function resolveCli(inputStr) {
    const q = normalize(inputStr);
    if (q === 'clear' || q === 'cls') {
      return {
        thinking: [],
        message: '',
        command: { ...emptyCommand(), action: 'CLEAR_TERMINAL', autoExecute: true },
        suggested_actions: []
      };
    }

    const baseUrl = AZURE_API_BASE_URL.replace(/\/+$/, '');
    if (baseUrl) {
      try {
        const res = await fetch(`${baseUrl}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            portfolioId: PORTFOLIO_ID,
            deviceId,
            message: inputStr
          })
        });
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.message === 'string') {
            return {
              thinking: Array.isArray(data.thinking) ? data.thinking : [],
              message: data.message,
              command: data.command || emptyCommand(),
              suggested_actions: Array.isArray(data.suggested_actions) ? data.suggested_actions : []
            };
          }
        }
      } catch (_) {}
    }
    return evaluateModularCommand(inputStr);
  }

  function createThinkingAccordion(thinkingSteps, elapsedSec, isLive) {
    const wrapper = document.createElement('div');
    wrapper.className = 'upla-think' + (isLive ? ' is-live is-expanded' : '');

    const headerBtn = document.createElement('button');
    headerBtn.type = 'button';
    headerBtn.className = 'upla-think__header';
    headerBtn.setAttribute('aria-expanded', isLive ? 'true' : 'false');

    const left = document.createElement('span');
    left.className = 'upla-think__title-wrap';
    left.innerHTML =
      THINKING_HEX_SVG +
      `<span class="upla-think__label">${
        isLive
          ? 'Núcleo Nexus pensando...'
          : `Traza completada · ${Number(elapsedSec || 1.2).toFixed(1)} s · ${thinkingSteps.length} fases`
      }</span>`;

    const right = document.createElement('span');
    right.className = 'upla-think__toggle-meta';
    right.innerHTML = `<span class="upla-think__toggle-text">${isLive ? 'Ocultar' : 'Desplegar traza'}</span>` + CHEVRON_SVG;

    headerBtn.appendChild(left);
    headerBtn.appendChild(right);

    const body = document.createElement('div');
    body.className = 'upla-think__body';

    const list = document.createElement('ol');
    list.className = 'upla-think__steps';

    thinkingSteps.forEach(t => {
      const li = document.createElement('li');
      li.className = 'upla-think__step';
      const phaseName = PHASE_LABELS[t.phase] || stripParentheses(t.phase || 'Fase');
      li.innerHTML =
        `<span class="upla-think__badge">${escapeHtml(phaseName)}</span>` +
        `<span class="upla-think__detail">${escapeHtml(stripParentheses(t.detail))}</span>`;
      list.appendChild(li);
    });

    body.appendChild(list);
    wrapper.appendChild(headerBtn);
    wrapper.appendChild(body);

    headerBtn.addEventListener('click', () => {
      const expanded = wrapper.classList.toggle('is-expanded');
      headerBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      const toggleTextEl = headerBtn.querySelector('.upla-think__toggle-text');
      if (toggleTextEl) {
        toggleTextEl.textContent = expanded ? 'Ocultar' : 'Desplegar traza';
      }
    });

    return wrapper;
  }

  function mountCliTerminal() {
    if (document.getElementById('uplaCli')) return;

    const root = document.createElement('div');
    root.id = 'uplaCli';
    root.className = 'nexus-hud';
    root.innerHTML = `
      <!-- Barra Lanzadora Central Inferior estilo Spotlight / HUD -->
      <button type="button" class="nexus-hud__dock" id="uplaCliTrigger" aria-label="Abrir consola central Nexus" aria-expanded="false">
        <span class="nexus-hud__dock-core">${NEXUS_MECHA_SVG}</span>
        <span class="nexus-hud__dock-prompt">NEXUS // Consultar arquitectura Java 17 o abrir galería...</span>
        <kbd class="nexus-hud__dock-kbd">Ctrl K</kbd>
      </button>

      <!-- Deck Horizontal de Doble Columna (Sidebar de Telemetría + Consola) -->
      <section class="nexus-hud__deck" id="uplaCliTerm" role="dialog" aria-label="Centro de Comando Nexus" aria-hidden="true">
        <!-- Columna Izquierda: Cabeza Mecha SVG + Telemetría + Matriz de Semanas -->
        <aside class="nexus-hud__sidebar" id="nexusSidebar">
          <div class="nexus-hud__mecha-wrap">
            <div class="nexus-hud__mecha-stage">${NEXUS_MECHA_SVG}</div>
            <strong class="nexus-hud__mecha-name">NEXUS // CORE</strong>
            <span class="nexus-hud__mecha-state" id="nexusCoreState">SISTEMA EN LÍNEA</span>
          </div>

          <div class="nexus-hud__matrix-block">
            <span class="nexus-hud__matrix-label">MATRIZ DE ENTREGAS</span>
            <div class="nexus-hud__matrix-grid" id="nexusWeekMatrix">
              <button type="button" data-q="Explicame la semana 1 de arreglos bidimensionales">S01</button>
              <button type="button" data-q="Explicame la semana 2 de matrices">S02</button>
              <button type="button" data-q="Explicame la semana 3 de arreglos paralelos">S03</button>
              <button type="button" data-q="Explicame la semana 4 de arreglo de objetos">S04</button>
              <button type="button" data-q="Explicame la semana 5 de ArrayList">S05</button>
              <button type="button" data-q="Explicame la semana 6 de pilas">S06</button>
              <button type="button" data-q="Explicame la semana 7 de colas en Java 17">S07</button>
              <button type="button" data-q="Muestrame el prototipo de Taller en Figma">UI</button>
            </div>
          </div>

          <div class="nexus-hud__side-actions">
            <button type="button" id="uplaCliClear">Limpiar salida</button>
            <button type="button" id="uplaCliClose">Ocultar HUD</button>
          </div>
        </aside>

        <!-- Columna Derecha: Stream de Conversación Técnica + Modo Thinking -->
        <div class="nexus-hud__main">
          <header class="nexus-hud__topbar">
            <span class="nexus-hud__breadcrumb">ALEXITO-HUB // ARQUITECTURA JAVA 17 · MODO THINKING</span>
            <span class="nexus-hud__hint">Usa las flechas ↑ ↓ para historial</span>
          </header>

          <div class="nexus-hud__stream" id="uplaCliLog" aria-live="polite">
            <div class="nexus-hud__welcome" id="uplaCliWelcome">
              <span class="nexus-hud__welcome-tag">CONSOLA INTERACTIVA DE INGENIERÍA</span>
              <h4>Bienvenido al Centro de Comando Nexus</h4>
              <p>Inspecciona la lógica interna de las clases Java 17 de Alessandro, compara estructuras de datos o lanza el visor de infografías directamente.</p>
              <div class="nexus-hud__presets">
                <button type="button" data-q="Comparame tecnicamente GestorPedidos frente a GestorTurnos en la semana 7">
                  <strong>Comparar GestorPedidos vs GestorTurnos</strong>
                  <small>Analiza nodo centinela, suma recursiva y tickets correlativos</small>
                </button>
                <button type="button" data-q="abrir galeria sem 7 ej 3">
                  <strong>Ejecutar visor en Semana 07 · Ejercicio 03</strong>
                  <small>Abre directamente la galería en los métodos de GestorPedidos</small>
                </button>
              </div>
            </div>
          </div>

          <form class="nexus-hud__commandbar" id="uplaCliForm" autocomplete="off">
            <span class="nexus-hud__caret">nexus&gt;</span>
            <input type="text" id="uplaCliInput" placeholder="Escribe una consulta técnica o comando directo..." aria-label="Consulta técnica para Nexus" />
            <button type="submit" id="uplaCliSubmit" class="nexus-hud__exec-submit">
              <span>Ejecutar</span>
              ${EXEC_ICON_SVG}
            </button>
          </form>
        </div>
      </section>
    `;

    document.body.appendChild(root);

    const trigger = document.getElementById('uplaCliTrigger');
    const term = document.getElementById('uplaCliTerm');
    const sidebar = document.getElementById('nexusSidebar');
    const coreState = document.getElementById('nexusCoreState');
    const matrix = document.getElementById('nexusWeekMatrix');
    const clearBtn = document.getElementById('uplaCliClear');
    const closeBtn = document.getElementById('uplaCliClose');
    const log = document.getElementById('uplaCliLog');
    const welcome = document.getElementById('uplaCliWelcome');
    const form = document.getElementById('uplaCliForm');
    const input = document.getElementById('uplaCliInput');
    const submitBtn = document.getElementById('uplaCliSubmit');

    function setCoreProcessing(active) {
      if (!sidebar || !coreState) return;
      sidebar.classList.toggle('is-processing', active);
      coreState.textContent = active ? 'RAZONANDO CONSULTA...' : 'SISTEMA EN LÍNEA';
    }

    function clearLog() {
      log.innerHTML = '';
    }

    function createLivePendingEntry(cmdText) {
      if (welcome && welcome.parentNode) {
        welcome.remove();
      }
      setCoreProcessing(true);

      const entry = document.createElement('div');
      entry.className = 'nexus-turn';

      const userBar = document.createElement('div');
      userBar.className = 'nexus-turn__query';
      userBar.innerHTML = `<span class="nexus-turn__prompt">CONSULTA //</span> <span>${escapeHtml(stripParentheses(cmdText))}</span>`;
      entry.appendChild(userBar);

      const cardEl = document.createElement('div');
      cardEl.className = 'nexus-turn__response';

      const liveSteps = [
        { step: 1, phase: 'INTENT', detail: 'Decodificando intención técnica y parámetros de ejecución' },
        { step: 2, phase: 'RETRIEVAL', detail: 'Extrayendo metadatos y firmas de métodos en Java 17' },
        { step: 3, phase: 'SYNTHESIS', detail: 'Compilando análisis técnico estructurado' }
      ];

      const thinkBox = createThinkingAccordion(liveSteps, 0.1, true);
      cardEl.appendChild(thinkBox);

      const skel = document.createElement('div');
      skel.className = 'upla-cli__skeleton';
      skel.innerHTML = '<span class="upla-skel-bar"></span><span class="upla-skel-bar upla-skel-bar--short"></span>';
      cardEl.appendChild(skel);

      entry.appendChild(cardEl);
      log.appendChild(entry);
      log.scrollTop = log.scrollHeight;

      const startTime = performance.now();
      const labelEl = thinkBox.querySelector('.upla-think__label');
      const timerId = setInterval(() => {
        const elapsed = (performance.now() - startTime) / 1000;
        if (labelEl) {
          labelEl.textContent = `Núcleo Nexus pensando... ${elapsed.toFixed(1)} s`;
        }
      }, 120);

      return {
        stopAndRemove() {
          clearInterval(timerId);
          setCoreProcessing(false);
          const elapsed = Math.max(0.4, (performance.now() - startTime) / 1000);
          if (entry.parentNode) entry.remove();
          return elapsed;
        }
      };
    }

    function writeLog(cmdText, outText, thinking = [], command = emptyCommand(), suggestedActions = [], allowAutoExec = true, elapsedSec = 1.3) {
      if (welcome && welcome.parentNode) {
        welcome.remove();
      }

      const entry = document.createElement('div');
      entry.className = 'nexus-turn';

      const userBar = document.createElement('div');
      userBar.className = 'nexus-turn__query';
      userBar.innerHTML = `<span class="nexus-turn__prompt">CONSULTA //</span> <span>${escapeHtml(stripParentheses(cmdText))}</span>`;
      entry.appendChild(userBar);

      const cardEl = document.createElement('div');
      cardEl.className = 'nexus-turn__response';

      if (Array.isArray(thinking) && thinking.length > 0) {
        const thinkAccordion = createThinkingAccordion(thinking, elapsedSec, false);
        cardEl.appendChild(thinkAccordion);
      }

      const outLine = document.createElement('div');
      outLine.className = 'upla-cli__out';
      outLine.innerHTML = formatOutput(outText);
      cardEl.appendChild(outLine);

      const hasCmd = command && command.action && command.action !== 'NONE';
      const hasSug = Array.isArray(suggestedActions) && suggestedActions.length > 0;

      if (hasCmd || hasSug) {
        const actionsRow = document.createElement('div');
        actionsRow.className = 'upla-cli__cmds';

        if (hasCmd) {
          const cmdBtn = document.createElement('button');
          cmdBtn.type = 'button';
          cmdBtn.className = 'upla-cli__exec-btn';
          cmdBtn.innerHTML = `${EXEC_ICON_SVG} <span>${escapeHtml(stripParentheses(command.description || 'Ejecutar acción'))}</span>`;
          cmdBtn.addEventListener('click', () => executeDomCommand(command, clearLog));
          actionsRow.appendChild(cmdBtn);
        }

        if (hasSug) {
          suggestedActions.slice(0, 2).forEach(act => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = stripParentheses(act.label);
            btn.addEventListener('click', () => {
              if (act.type === 'prompt') runCommand(act.target);
              else if (/^https?:\/\//i.test(act.target)) window.open(act.target, '_blank', 'noopener,noreferrer');
              else window.location.href = act.target;
            });
            actionsRow.appendChild(btn);
          });
        }

        cardEl.appendChild(actionsRow);
      }

      entry.appendChild(cardEl);
      log.appendChild(entry);
      log.scrollTop = log.scrollHeight;

      if (allowAutoExec && hasCmd && command.autoExecute) {
        executeDomCommand(command, clearLog);
      }
    }

    function toggleCli(state) {
      isOpen = typeof state === 'boolean' ? state : !isOpen;
      term.classList.toggle('open', isOpen);
      term.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) setTimeout(() => input.focus(), 50);
    }

    async function runCommand(val) {
      const clean = String(val || '').trim();
      if (!clean || isPending) return;
      cmdHistory.push(clean);
      historyPos = -1;
      input.value = '';
      isPending = true;
      input.disabled = true;
      if (submitBtn) submitBtn.disabled = true;

      const pendingEntry = createLivePendingEntry(clean);
      const res = await resolveCli(clean);
      const elapsedSec = pendingEntry.stopAndRemove();

      isPending = false;
      input.disabled = false;
      if (submitBtn) submitBtn.disabled = false;

      if (res.command && res.command.action === 'CLEAR_TERMINAL') {
        clearLog();
        input.focus();
        return;
      }

      writeLog(clean, res.message, res.thinking, res.command, res.suggested_actions, true, elapsedSec);
      input.focus();
    }

    trigger.addEventListener('click', () => toggleCli());
    closeBtn.addEventListener('click', () => toggleCli(false));
    clearBtn.addEventListener('click', clearLog);

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggleCli();
      } else if (e.key === 'Escape' && isOpen) {
        toggleCli(false);
      }
    });

    if (welcome) {
      welcome.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-q]');
        if (btn) runCommand(btn.getAttribute('data-q'));
      });
    }

    if (matrix) {
      matrix.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-q]');
        if (btn) runCommand(btn.getAttribute('data-q'));
      });
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        if (cmdHistory.length > 0 && historyPos < cmdHistory.length - 1) {
          historyPos++;
          input.value = cmdHistory[cmdHistory.length - 1 - historyPos];
          e.preventDefault();
        }
      } else if (e.key === 'ArrowDown') {
        if (historyPos > 0) {
          historyPos--;
          input.value = cmdHistory[cmdHistory.length - 1 - historyPos];
          e.preventDefault();
        } else if (historyPos === 0) {
          historyPos = -1;
          input.value = '';
          e.preventDefault();
        }
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      runCommand(input.value);
    });

    hydrateFromAzure(writeLog);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const loader = typeof window.getPortafolioData === 'function'
      ? window.getPortafolioData()
      : fetch('data/portafolio.json').then(r => r.json());

    Promise.resolve(loader)
      .then(data => {
        portfolioData = data;
        chunksIndex = buildModularChunks(data);
        mountCliTerminal();
      })
      .catch(() => mountCliTerminal());
  });
})();
