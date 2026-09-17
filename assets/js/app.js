const algoritmosUnidades = [
  {
    titulo: 'CONCEPTOS DE ALGORITMOS Y ESTRUCTURAS DE DATOS',
    capacidad: "Aplica los conceptos básicos de los algoritmos y estructuras de datos para su aplicación en diversos problemas.",
    entregas: [
      {
        nombre: 'Desarrollo de trabajo en java ',
        tipo: 'word',
        url: 'https://github.com/Alexito-Hub/Alexito-Hub/releases/download/semana01-update/algorit.docx'
      }
    ]
  },
  {
    titulo: "PILAS, COLAS Y RECURSIVIDAD",
    capacidad: "Construye algoritmos utilizando pilas, colas y recursividad, a través del aprendizaje basado en problemas, para guardar resultados parciales y las llamadas pendientes del procedimiento recursivo"
  },
  {
    titulo: " LISTAS ENLAZADAS",
    capacidad: "Construye algoritmos utilizando listas enlazadas, a través del aprendizaje basado en problemas, para implementarse en otras estructuras de datos"
  },
  {
    titulo: "ARBOLES, GRAFOS, MÉTODOS DE ORDENACIÓN Y BÚSQUEDA",
    capacidad: "Construye algoritmos utilizando árboles, grafos, métodos de ordenación y métodos de búsqueda, a través del aprendizaje basado en problemas, para encontrar el elemento que se requiere o identificar las relaciones entre los datos"
  }
];

const tallerUnidades = [
  {
    titulo: 'Introducción a Taller VII: Desarrollo de apps',
    entregas: [
      {
        nombre: 'Desarrollo de trabajo en figma ',
        tipo: 'enlace',
        url: 'https://www.figma.com/design/oCzbZQH8LLbaF9meqa5jAt/Taller?node-id=2-417&t=31kaySltkgmQDZK3-1'
      }
    ]
  }
];

function renderUnits(containerId, unidades) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = unidades.map((unidad, i) => {
    const entregas = unidad.entregas.map(e => {
      const badgeClass = e.tipo === 'pdf' ? 'badge-pdf' :
        e.tipo === 'word' ? 'badge-word' : 'badge-enlace';
      const badgeText = e.tipo === 'pdf' ? 'PDF' :
        e.tipo === 'word' ? 'Word' : 'Enlace';

      let actions = '';
      if (e.tipo === 'pdf') {
        actions = `
          <a href="${e.url}" target="_blank" class="action-btn btn-view">Ver PDF</a>
          <a href="${e.url}" download class="action-btn btn-dl">Descargar</a>`;
      } else if (e.tipo === 'word') {
        actions = `
          <a href="${e.url}" download class="action-btn btn-word">Descargar .docx</a>`;
      } else {
        actions = `
          <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="action-btn btn-link">${e.textoBtn || 'Ver enlace ↗'}</a>`;
      }

      return `
        <div class="unit-item-row">
          <div class="unit-item-left">
            <span class="badge ${badgeClass}">${badgeText}</span>
            <span class="unit-item-name">${e.nombre}</span>
          </div>
          <div class="unit-item-actions">${actions}</div>
        </div>`;
    }).join('');

    return `
      <section class="unit-rect">
        <div class="unit-rect-header">
          <h2 class="unit-rect-title">
            <span class="unit-rect-tag">Unidad ${i + 1}</span>
            ${unidad.titulo}
          </h2>
        </div>
        <div class="unit-items">${entregas}</div>
      </section>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('nav-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => drawer.classList.toggle('open'));
  }

  renderUnits('units-algoritmos', algoritmosUnidades);
  renderUnits('units-taller', tallerUnidades);
});
