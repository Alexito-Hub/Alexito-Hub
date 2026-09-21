// ==========================================
// ASIGNATURA I: Algoritmos y Estructura de Datos (4 Unidades del Sílabo UPLA)
// ==========================================
const algoritmosUnidades = [
  {
    titulo: 'CONCEPTOS DE ALGORITMOS Y ESTRUCTURAS DE DATOS',
    semanas: 'Semanas 01 - 04',
    abierta: true,
    entregas: [
      {
        id: 'alg-sem-1',
        semana: 'Semana 01',
        nombre: 'Arreglos Bidimensionales',
        tipo: 'imagenes',
        cantidad: 9,
        releaseUrl: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/tag/iimg',
        imagenes: [
          { nombre: 'Ejercicio 01', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_01.png' },
          { nombre: 'Ejercicio 02', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_02.png' },
          { nombre: 'Ejercicio 03', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_03.png' },
          { nombre: 'Ejercicio 04', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_04.png' },
          { nombre: 'Ejercicio 05', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_05.png' },
          { nombre: 'Ejercicio 06', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_06.png' },
          { nombre: 'Ejercicio 07', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_07.png' },
          { nombre: 'Ejercicio 08', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_08.png' },
          { nombre: 'Ejercicio 09', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_09.png' }
        ]
      },
      {
        id: 'alg-sem-2',
        semana: 'Semana 02',
        nombre: 'Arreglos Paralelos y de Objetos',
        tipo: 'imagenes',
        cantidad: 10,
        releaseUrl: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/tag/iimg',
        imagenes: [
          { nombre: 'Ejercicio 2.01', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_01.png' },
          { nombre: 'Ejercicio 2.02', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_02.png' },
          { nombre: 'Ejercicio 2.03', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_03.png' },
          { nombre: 'Ejercicio 2.04', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_04.png' },
          { nombre: 'Ejercicio 2.05', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_05.png' },
          { nombre: 'Ejercicio 2.06', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_06.png' },
          { nombre: 'Ejercicio 2.07', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_07.png' },
          { nombre: 'Ejercicio 2.08', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_08.png' },
          { nombre: 'Ejercicio 2.09', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_09.png' },
          { nombre: 'Ejercicio 2.10', url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/Ejercicio_2_10.png' }
        ]
      }
    ]
  },
  {
    titulo: 'PILAS, COLAS Y RECURSIVIDAD',
    semanas: 'Semanas 05 - 08',
    abierta: false,
    entregas: []
  },
  {
    titulo: 'LISTAS ENLAZADAS',
    semanas: 'Semanas 09 - 12',
    abierta: false,
    entregas: []
  },
  {
    titulo: 'ARBOLES, GRAFOS, MÉTODOS DE ORDENACIÓN Y BÚSQUEDA',
    semanas: 'Semanas 13 - 16',
    abierta: false,
    entregas: []
  }
];

// ==========================================
// ASIGNATURA II: Taller VII: Desarrollo de Aplicaciones I (UPLA)
// ==========================================
const tallerUnidades = [
  {
    titulo: 'Introducción a Taller VII: Desarrollo de apps',
    semanas: 'Semanas 01 - 04',
    abierta: true,
    entregas: [
      {
        id: 'taller-sem-1',
        semana: 'Semana 01',
        nombre: 'Desarrollo de trabajo en figma',
        tipo: 'figma',
        url: 'https://www.figma.com/design/oCzbZQH8LLbaF9meqa5jAt/Taller?node-id=2-417&t=31kaySltkgmQDZK3-1',
        textoBtn: 'Ver en Figma ↗'
      },
      {
        id: 'taller-sem-2',
        semana: 'Semana 02',
        nombre: 'Desarrollo de aplicación (.rar)',
        tipo: 'rar',
        url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/semana02/taller_semana02.rar',
        textoBtn: 'Descargar .rar'
      }
    ]
  }
];

// ==========================================
// ANIMACIÓN DE FONDO: CYBER MATRIX RAIN
// ==========================================
function initMatrixBackground() {
  if (document.getElementById('matrix-bg-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-bg-canvas';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const chars = '01010148AFCE{}[];:=><~+-*/$#_';
  let fontSize = 14;
  let columns = 0;
  let drops = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / (fontSize * 1.2));
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }
  }

  resize();
  window.addEventListener('resize', resize);

  let lastTime = 0;
  const fpsInterval = 1000 / 25; // 25 FPS para fluidez y bajo consumo

  function draw(currentTime) {
    requestAnimationFrame(draw);

    if (document.hidden) return;

    const elapsed = currentTime - lastTime;
    if (elapsed < fpsInterval) return;
    lastTime = currentTime - (elapsed % fpsInterval);

    ctx.fillStyle = 'rgba(9, 12, 21, 0.14)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length));
      const x = i * fontSize * 1.2;
      const y = drops[i] * fontSize;

      if (Math.random() > 0.88) {
        ctx.fillStyle = '#38bdf8'; // Celeste
      } else if (Math.random() > 0.6) {
        ctx.fillStyle = '#818cf8'; // Índigo
      } else {
        ctx.fillStyle = '#475569'; // Gris slate
      }

      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  requestAnimationFrame(draw);
}

// ==========================================
// REGISTRO DE GALERÍAS Y VISOR DE IMÁGENES
// ==========================================
const galleries = {};
let activeGalleryId = null;
let activeGalleryIndex = 0;

function initLightbox() {
  if (document.getElementById('gallery-modal')) return;

  const modalHtml = `
    <div id="gallery-modal" class="gallery-modal" role="dialog" aria-modal="true" aria-label="Visualizador de imágenes">
      <div class="gallery-header">
        <div class="gallery-title-box">
          <div class="gallery-title" id="gallery-modal-title">Visualizador</div>
          <div class="gallery-subtitle" id="gallery-modal-subtitle">Cargando...</div>
        </div>
        <div class="gallery-actions">
          <a id="gallery-modal-ext" href="#" target="_blank" rel="noopener noreferrer" class="gallery-btn" title="Abrir imagen original">
            <span>Abrir original ↗</span>
          </a>
          <button type="button" class="gallery-btn gallery-btn-close" id="gallery-modal-close" aria-label="Cerrar">&times;</button>
        </div>
      </div>

      <div class="gallery-stage">
        <button type="button" class="gallery-nav-btn gallery-prev" id="gallery-modal-prev" aria-label="Anterior">‹</button>
        <div class="gallery-img-container">
          <div class="gallery-loader" id="gallery-modal-loader"></div>
          <img id="gallery-modal-img" src="" alt="Captura del ejercicio" />
        </div>
        <button type="button" class="gallery-nav-btn gallery-next" id="gallery-modal-next" aria-label="Siguiente">›</button>
      </div>

      <div class="gallery-thumbs-bar" id="gallery-modal-thumbs"></div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('gallery-modal');
  const closeBtn = document.getElementById('gallery-modal-close');
  const prevBtn = document.getElementById('gallery-modal-prev');
  const nextBtn = document.getElementById('gallery-modal-next');

  if (closeBtn) closeBtn.addEventListener('click', closeGallery);
  if (prevBtn) prevBtn.addEventListener('click', () => navigateGallery(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateGallery(1));

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeGallery();
    });
  }

  document.addEventListener('keydown', (e) => {
    const currentModal = document.getElementById('gallery-modal');
    if (!currentModal || !currentModal.classList.contains('open')) return;
    if (e.key === 'Escape') closeGallery();
    else if (e.key === 'ArrowLeft') navigateGallery(-1);
    else if (e.key === 'ArrowRight') navigateGallery(1);
  });
}

function openGallery(galleryId, startIndex = 0) {
  const gallery = galleries[galleryId];
  if (!gallery || !gallery.items || gallery.items.length === 0) return;

  activeGalleryId = galleryId;
  activeGalleryIndex = Math.max(0, Math.min(startIndex, gallery.items.length - 1));

  const modal = document.getElementById('gallery-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  renderGalleryThumbs();
  updateGalleryView();
}

function closeGallery() {
  const modal = document.getElementById('gallery-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateGallery(delta) {
  if (!activeGalleryId) return;
  const gallery = galleries[activeGalleryId];
  if (!gallery || !gallery.items.length) return;

  const total = gallery.items.length;
  activeGalleryIndex = (activeGalleryIndex + delta + total) % total;
  updateGalleryView();
}

function updateGalleryView() {
  const gallery = galleries[activeGalleryId];
  if (!gallery) return;

  const item = gallery.items[activeGalleryIndex];
  const total = gallery.items.length;

  const titleEl = document.getElementById('gallery-modal-title');
  const subtitleEl = document.getElementById('gallery-modal-subtitle');
  const extEl = document.getElementById('gallery-modal-ext');
  const imgEl = document.getElementById('gallery-modal-img');
  const loaderEl = document.getElementById('gallery-modal-loader');

  if (titleEl) titleEl.textContent = gallery.title;
  if (subtitleEl) subtitleEl.textContent = `${item.nombre} · ${activeGalleryIndex + 1} de ${total}`;
  if (extEl) extEl.href = item.url;

  if (loaderEl) loaderEl.style.display = 'block';
  if (imgEl) {
    imgEl.style.opacity = '0';
    const preload = new Image();
    preload.onload = () => {
      imgEl.src = item.url;
      imgEl.style.opacity = '1';
      if (loaderEl) loaderEl.style.display = 'none';
    };
    preload.onerror = () => {
      imgEl.src = item.url;
      imgEl.style.opacity = '1';
      if (loaderEl) loaderEl.style.display = 'none';
    };
    preload.src = item.url;
  }

  const thumbs = document.querySelectorAll('.gallery-thumb-item');
  thumbs.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === activeGalleryIndex);
  });

  const activeThumb = thumbs[activeGalleryIndex];
  if (activeThumb) {
    activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

function renderGalleryThumbs() {
  const gallery = galleries[activeGalleryId];
  const thumbsContainer = document.getElementById('gallery-modal-thumbs');
  if (!gallery || !thumbsContainer) return;

  thumbsContainer.innerHTML = gallery.items.map((item, idx) => `
    <div class="gallery-thumb-item ${idx === activeGalleryIndex ? 'active' : ''}" data-idx="${idx}" title="${item.nombre}">
      <img src="${item.url}" alt="${item.nombre}" loading="lazy" />
      <span class="gallery-thumb-label">${idx + 1}</span>
    </div>
  `).join('');

  thumbsContainer.querySelectorAll('.gallery-thumb-item').forEach(el => {
    el.addEventListener('click', () => {
      activeGalleryIndex = parseInt(el.dataset.idx, 10);
      updateGalleryView();
    });
  });
}

window.openGallery = openGallery;
window.closeGallery = closeGallery;

// ==========================================
// FUNCIÓN PARA COLAPSAR/EXPANDIR UNIDADES
// ==========================================
function toggleUnitAccordion(headerEl) {
  const unitBox = headerEl.closest('.unit-box');
  if (!unitBox) return;
  unitBox.classList.toggle('collapsed');
}
window.toggleUnitAccordion = toggleUnitAccordion;

// ==========================================
// RENDERIZADO ESTRUCTURADO Y ORDENADO DE UNIDADES
// ==========================================
function renderUnits(containerId, unidades) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = unidades.map((unidad, i) => {
    const hasEntregas = unidad.entregas && unidad.entregas.length > 0;
    const isInitiallyOpen = unidad.abierta !== undefined ? unidad.abierta : hasEntregas;
    const collapsedClass = isInitiallyOpen ? '' : 'collapsed';

    let entregasHtml = '';

    if (hasEntregas) {
      entregasHtml = unidad.entregas.map(e => {
        if (e.tipo === 'imagenes' && e.id) {
          galleries[e.id] = {
            title: `${e.semana}: ${e.nombre}`,
            items: e.imagenes || []
          };
        }

        let actionsHtml = '';
        let badgeTag = '';
        let thumbsPreviewHtml = '';

        if (e.tipo === 'imagenes') {
          const totalImg = e.cantidad || (e.imagenes ? e.imagenes.length : 0);
          badgeTag = `<span class="badge-clean badge-violet">${totalImg} imágenes</span>`;

          const miniThumbs = (e.imagenes || []).slice(0, 3).map((img, idx) => `
            <div class="row-mini-thumb" onclick="openGallery('${e.id}', ${idx})" title="${img.nombre}">
              <img src="${img.url}" alt="${img.nombre}" loading="lazy" />
            </div>
          `).join('');

          const remainingCount = totalImg - 3;
          const morePill = remainingCount > 0
            ? `<span class="row-thumb-more" onclick="openGallery('${e.id}', 3)">+${remainingCount}</span>`
            : '';

          thumbsPreviewHtml = `
            <div class="row-thumbs-group">
              ${miniThumbs}
              ${morePill}
            </div>
          `;

          actionsHtml = `
            <button type="button" class="btn-clean btn-primary" onclick="openGallery('${e.id}', 0)">
              Visualizar (${totalImg})
            </button>
            <a href="${e.releaseUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn-clean btn-ghost" title="Ver en GitHub">
              GitHub ↗
            </a>
          `;
        } else if (e.tipo === 'rar') {
          badgeTag = `<span class="badge-clean badge-amber">Paquete .RAR</span>`;
          actionsHtml = `
            <a href="${e.url}" download class="btn-clean btn-amber">
              ${e.textoBtn || 'Descargar .rar'}
            </a>
          `;
        } else if (e.tipo === 'figma') {
          badgeTag = `<span class="badge-clean badge-sky">Figma UI</span>`;
          actionsHtml = `
            <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="btn-clean btn-sky">
              ${e.textoBtn || 'Ver en Figma ↗'}
            </a>
          `;
        }

        return `
          <div class="delivery-row">
            <div class="delivery-meta">
              <span class="delivery-week">${e.semana}</span>
              <div class="delivery-title-box">
                <span class="delivery-name">${e.nombre}</span>
                ${badgeTag}
              </div>
            </div>
            ${thumbsPreviewHtml}
            <div class="delivery-btns">
              ${actionsHtml}
            </div>
          </div>`;
      }).join('');
    } else {
      entregasHtml = `
        <div class="unit-pending-notice">
          <span class="notice-prefix">&gt; Estado:</span>
          <span>Programado según sílabo académico UPLA (${unidad.semanas}). Entregas próximas a publicarse.</span>
        </div>`;
    }

    return `
      <section class="unit-box ${collapsedClass}">
        <div class="unit-box-header" onclick="toggleUnitAccordion(this)" role="button" tabindex="0" title="Click para expandir o contraer">
          <div class="unit-title-group">
            <span class="unit-tag">U0${i + 1}</span>
            <div class="unit-name-wrapper">
              <h2 class="unit-title">${unidad.titulo}</h2>
              <span class="unit-timeline">${unidad.semanas}</span>
            </div>
          </div>
          <div class="unit-header-right">
            ${hasEntregas
              ? `<span class="unit-status-tag">${unidad.entregas.length} entrega(s)</span>`
              : `<span class="unit-pending-tag">[En espera]</span>`
            }
            <span class="unit-toggle-icon"></span>
          </div>
        </div>
        <div class="unit-deliveries-list">
          ${entregasHtml}
        </div>
      </section>`;
  }).join('');
}

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('nav-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => drawer.classList.toggle('open'));
  }

  initMatrixBackground();
  initLightbox();
  renderUnits('units-algoritmos', algoritmosUnidades);
  renderUnits('units-taller', tallerUnidades);
});
