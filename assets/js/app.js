/* ============================================================
   PORTAFOLIO ACADÉMICO — app.js  (sin emojis)
   ============================================================ */

const TRABAJOS = [
  {
    id: 1,
    titulo: "Análisis de Algoritmos de Ordenamiento — Comparativa Empírica",
    materia: "Análisis de Algoritmos",
    semestre: "2025-I",
    fecha: "2025-03-15",
    categoria: "Informe",
    tags: ["violet"],
    tagNames: ["Algoritmos"],
    descripcion: "Informe técnico que compara el rendimiento empírico de QuickSort, MergeSort y HeapSort sobre conjuntos de datos de distinto tamaño, midiendo tiempos de ejecución y operaciones de comparación.",
    pdf: "analisis-algoritmos-ordenamiento.pdf",
    paginas: 28
  },
  {
    id: 2,
    titulo: "Diseño de Base de Datos para Sistema de Gestión Académica",
    materia: "Bases de Datos I",
    semestre: "2025-I",
    fecha: "2025-04-02",
    categoria: "Laboratorio",
    tags: ["cyan"],
    tagNames: ["BD"],
    descripcion: "Modelado entidad-relación, normalización hasta 3FN y script SQL de creación para un sistema de gestión universitaria. Incluye procedimientos almacenados y vistas.",
    pdf: "bd-gestion-academica.pdf",
    paginas: 42
  },
  {
    id: 3,
    titulo: "Implementación de Árbol AVL con Visualización Gráfica",
    materia: "Estructuras de Datos",
    semestre: "2024-II",
    fecha: "2024-11-20",
    categoria: "Proyecto",
    tags: ["green"],
    tagNames: ["Estructuras"],
    descripcion: "Implementación completa de un árbol AVL auto-balanceado en Java, con interfaz gráfica que visualiza rotaciones simples y dobles en tiempo real.",
    pdf: "arbol-avl-visualizacion.pdf",
    paginas: 35
  },
  {
    id: 4,
    titulo: "Protocolo TCP/IP — Análisis de Tráfico con Wireshark",
    materia: "Redes de Computadores",
    semestre: "2025-I",
    fecha: "2025-05-10",
    categoria: "Laboratorio",
    tags: ["amber"],
    tagNames: ["Redes"],
    descripcion: "Captura y análisis de paquetes en red local. Identificación del three-way handshake, fragmentación IP y overhead de protocolos HTTP, HTTPS y DNS.",
    pdf: "redes-wireshark-analisis.pdf",
    paginas: 22
  },
  {
    id: 5,
    titulo: "Máquina Virtual Stack-Based — Diseño e Implementación",
    materia: "Lenguajes de Programación",
    semestre: "2024-II",
    fecha: "2024-10-08",
    categoria: "Proyecto",
    tags: ["violet"],
    tagNames: ["Compiladores"],
    descripcion: "Diseño de una máquina virtual basada en pila con set de instrucciones propio, compilador a bytecode y depurador paso a paso. Implementado en Python.",
    pdf: "maquina-virtual-stack.pdf",
    paginas: 56
  },
  {
    id: 6,
    titulo: "Informe de Laboratorio — Sistemas Operativos: Scheduling",
    materia: "Sistemas Operativos",
    semestre: "2025-I",
    fecha: "2025-02-28",
    categoria: "Laboratorio",
    tags: ["red"],
    tagNames: ["SO"],
    descripcion: "Simulación y comparación de algoritmos de planificación de CPU: FCFS, SJF, Round Robin y Priority Scheduling. Análisis de métricas de espera y turnaround.",
    pdf: "so-scheduling-lab.pdf",
    paginas: 19
  },
  {
    id: 7,
    titulo: "Cálculo Diferencial — Resolución de Problemas con Límites y Derivadas",
    materia: "Cálculo Diferencial",
    semestre: "2024-I",
    fecha: "2024-05-20",
    categoria: "Taller",
    tags: ["cyan"],
    tagNames: ["Matemáticas"],
    descripcion: "Compendio de 30 problemas resueltos sobre límites laterales, derivadas por definición, regla de la cadena y aplicaciones en optimización de funciones.",
    pdf: "calculo-diferencial-taller.pdf",
    paginas: 48
  },
  {
    id: 8,
    titulo: "Criptografía Simétrica — Implementación de AES-128",
    materia: "Seguridad Informática",
    semestre: "2025-I",
    fecha: "2025-06-01",
    categoria: "Proyecto",
    tags: ["green"],
    tagNames: ["Seguridad"],
    descripcion: "Implementación desde cero del algoritmo AES-128 en Python, con análisis de los modos de operación ECB, CBC y GCM. Comparativa de rendimiento y vulnerabilidades.",
    pdf: "criptografia-aes128.pdf",
    paginas: 31
  },
  {
    id: 9,
    titulo: "Diagrama de Arquitectura — Nexo: Cliente Estudiantil Unificado",
    materia: "Ingeniería de Software",
    semestre: "2025-I",
    fecha: "2025-07-15",
    categoria: "Diagrama",
    tags: ["amber"],
    tagNames: ["Arquitectura"],
    descripcion: "Documentación arquitectónica del proyecto Nexo: cliente de escritorio multiplataforma con IA local (Ollama), módulos de campus virtual, correo y agenda unificados.",
    pdf: "nexo-arquitectura-diagrama.pdf",
    paginas: 14
  }
];

// SVG icons used in cards (inline, no emojis)
const ICON = {
  file: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  calendar: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  book:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  pages:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  eye:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  empty:    `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>`,
  check:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

let state = {
  query: '',
  categoria: 'Todos',
  semestre: 'Todos',
  ordenar: 'fecha-desc',
  vista: 'grid'
};

// Sidebar removed — navigation is now a top navbar handled in HTML

function renderCards() {
  const grid = document.getElementById('pdf-grid');
  if (!grid) return;

  let data = [...TRABAJOS];

  if (state.categoria !== 'Todos') data = data.filter(t => t.categoria === state.categoria);
  if (state.semestre !== 'Todos')  data = data.filter(t => t.semestre === state.semestre);

  if (state.query.trim()) {
    const q = state.query.toLowerCase();
    data = data.filter(t =>
      t.titulo.toLowerCase().includes(q) ||
      t.materia.toLowerCase().includes(q) ||
      t.descripcion.toLowerCase().includes(q) ||
      t.tagNames.some(tag => tag.toLowerCase().includes(q))
    );
  }

  data.sort((a, b) => {
    if (state.ordenar === 'fecha-desc') return new Date(b.fecha) - new Date(a.fecha);
    if (state.ordenar === 'fecha-asc')  return new Date(a.fecha) - new Date(b.fecha);
    if (state.ordenar === 'titulo-az')  return a.titulo.localeCompare(b.titulo);
    if (state.ordenar === 'titulo-za')  return b.titulo.localeCompare(a.titulo);
    return 0;
  });

  const countEl = document.getElementById('results-count');
  if (countEl) countEl.textContent = `${data.length} trabajos`;

  grid.innerHTML = data.length === 0
    ? `<div class="empty-state">
        ${ICON.empty}
        <p>No se encontraron trabajos con ese criterio.</p>
      </div>`
    : data.map((t, i) => cardHTML(t, i)).join('');

  grid.classList.toggle('list-view', state.vista === 'list');
}

// Map tag colour names to CSS category classes
const TAG_TO_CAT = { violet:'cat-violet', cyan:'cat-sky', green:'cat-emerald', amber:'cat-amber', red:'cat-rose' };

function cardHTML(t, index) {
  const catClass = TAG_TO_CAT[t.tags[0]] || 'cat-violet';

  const fecha = new Date(t.fecha).toLocaleDateString('es-CO', {
    year: 'numeric', month: 'short', day: 'numeric'
  });

  const pdfPath = `pdfs/${t.pdf}`;

  return `
    <article class="p-card" style="animation-delay:${index * 0.05}s">
      <div class="card-strip"></div>
      <div class="card-thumb">
        <div class="thumb-icon">${ICON.file}</div>
        <div class="thumb-meta">
          <span class="card-category ${catClass}">${t.tagNames[0]}</span>
          <div class="card-title">${t.titulo}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-desc">${t.descripcion}</p>
        <div class="card-chips">
          <span class="chip">${ICON.calendar} ${fecha}</span>
          <span class="chip">${ICON.book} ${t.materia}</span>
          <span class="chip">${ICON.pages} ${t.paginas} pág.</span>
        </div>
      </div>
      <div class="card-foot">
        <a href="${pdfPath}" target="_blank" class="btn btn-primary" onclick="trackView('${t.titulo}')">
          ${ICON.eye} Visualizar
        </a>
        <a href="${pdfPath}" download class="btn btn-outline btn-sm" onclick="trackDownload('${t.titulo}')">
          ${ICON.download} Descargar
        </a>
      </div>
    </article>
  `;
}

function trackView(titulo) {
  showToast(`Abriendo: ${titulo.substring(0, 45)}...`);
}

function trackDownload(titulo) {
  showToast(`Descargando: ${titulo.substring(0, 45)}...`);
}

function initDashboard() {
  const grid = document.getElementById('pdf-grid');
  if (!grid) return;

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => { state.query = e.target.value; renderCards(); });
  }

  document.querySelectorAll('.filter-pill[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill[data-cat]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.categoria = btn.dataset.cat;
      renderCards();
    });
  });

  const semSelect = document.getElementById('sem-select');
  if (semSelect) semSelect.addEventListener('change', e => { state.semestre = e.target.value; renderCards(); });

  const orderSelect = document.getElementById('order-select');
  if (orderSelect) orderSelect.addEventListener('change', e => { state.ordenar = e.target.value; renderCards(); });

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.vista = btn.dataset.view;
      renderCards();
    });
  });

  const totalEl = document.getElementById('stat-total');
  if (totalEl) totalEl.textContent = TRABAJOS.length;

  const catEl = document.getElementById('stat-cats');
  if (catEl) catEl.textContent = [...new Set(TRABAJOS.map(t => t.categoria))].length;

  const semEl = document.getElementById('stat-sems');
  if (semEl) semEl.textContent = [...new Set(TRABAJOS.map(t => t.semestre))].length;

  const pagesEl = document.getElementById('stat-pages');
  if (pagesEl) pagesEl.textContent = TRABAJOS.reduce((s, t) => s + t.paginas, 0);

  renderCards();
}

function showToast(msg) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
});
