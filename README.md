<div align="center">

# 🎓 Alexito-Hub — Portafolio Académico

[![GitHub Pages](https://img.shields.io/badge/Ver%20Sitio-GitHub%20Pages-8b5cf6?style=for-the-badge&logo=github)](https://alexito-hub.github.io/Alexito-Hub/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)]()
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)]()

</div>

---

Portafolio académico de **Alessandro Villogas Gaspar**, estudiante de **Ingeniería de Sistemas y Computación**. Aquí se organizan las entregas, talleres y laboratorios de las asignaturas cursadas.

## 📚 Asignaturas

| # | Asignatura | Unidades |
|---|------------|----------|
| 1 | **Algoritmos y Estructura de Datos** | 4 |
| 2 | **Taller VII: Desarrollo de Aplicaciones I** | 4 |

## 🗂 Estructura del Proyecto

```
Alexito-Hub/
├── index.html          ← Página de inicio
├── algoritmos.html     ← Algoritmos y Estructura de Datos
├── taller-vii.html     ← Taller VII: Desarrollo de Aplicaciones I
├── perfil.html         ← Perfil del estudiante
├── assets/
│   ├── css/styles.css  ← Estilos del sitio
│   └── js/app.js       ← Datos y lógica (editar aquí las entregas)
└── pdfs/               ← Archivos PDF y Word de las entregas
```

## ✏️ Cómo agregar entregas

Edita el archivo **`assets/js/app.js`** y agrega objetos al array de la asignatura correspondiente:

```js
{
  nombre: 'Nombre del trabajo',
  tipo: 'pdf',        // pdf | word | enlace
  url: 'pdfs/archivo.pdf'
}
```

**Tipos soportados:**
- `pdf` → Botones "Ver PDF" y "Descargar"
- `word` → Botón "Descargar .docx"
- `enlace` → Botón con link externo

## 🛠 Tecnologías

- **HTML5** — Estructura semántica
- **CSS3** — Diseño dark mode con variables CSS
- **JavaScript Vanilla** — Renderizado dinámico de unidades
- **Google Fonts** — Tipografía Inter

## 📬 Contacto

- ✉️ [alessandrovillogas@outlook.es](mailto:alessandrovillogas@outlook.es)

---

<div align="center">
  <sub>Hecho con 💜 por Alessandro Villogas Gaspar</sub>
</div>
