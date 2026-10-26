// ==========================================
// PORTAFOLIO ACADÉMICO — Alexito-Hub (Alessandro Villogas Gaspar)
// Motor dinámico basado en data/portafolio.json + Galería con Zoom + Soporte Chatbot
// ==========================================

const FALLBACK_DATA = {
  "estudiante": {
    "nombre": "Alessandro Villogas Gaspar",
    "nombreCorto": "Alessandro Villogas",
    "usuario": "Alexito-Hub",
    "rol": "Estudiante de Ingeniería de Sistemas y Computación",
    "universidad": "Universidad Peruana Los Andes (UPLA)",
    "facultad": "Facultad de Ingeniería",
    "escuela": "Escuela Profesional de Ingeniería de Sistemas y Computación",
    "carrera": "Ingeniería de Sistemas y Computación",
    "plan": "Plan 2022",
    "ciclo": "IV Ciclo (2026-II)",
    "modalidad": "Presencial",
    "ciudad": "Huancayo, Perú",
    "email": "alessandrovillogas@outlook.es",
    "github": "https://github.com/Alexito-Hub",
    "linkedin": "https://www.linkedin.com/in/alessandro-villogas/",
    "repositorio": "https://github.com/Alexito-Hub/Alexito-Hub",
    "biografia": "Estudiante de Ingeniería de Sistemas y Computación en la UPLA enfocado en el análisis de algoritmos, estructuras de datos en Java y desarrollo de aplicaciones web y de escritorio aplicando estándares de calidad de software."
  },
  "conocimientoTecnico": {
    "figma_prototipado": {
      "titulo": "Prototipado UI/UX en Figma (Semana 01 - Taller VII)",
      "explicacion": "Diseño de interfaces y flujo de navegación en Figma para estructurar la experiencia de usuario, grillas, componentes reutilizables y prototipo interactivo antes de la implementación."
    },
    "complejidades": {
      "arreglos_bidimensionales": "Acceso directo por coordenadas m[i][j] en O(1); recorridos completos por filas, columnas o bordes en O(F * C).",
      "arreglos_paralelos": "Inserción en el índice actual O(1); búsqueda lineal O(n); ordenamiento sincronizando múltiples vectores en paralelo O(n^2).",
      "arreglos_objetos": "Encapsulamiento en clases Modelo y administración en clase DAO con arreglo estático de objetos. Inserción O(1), búsqueda O(n), ordenamiento O(n^2).",
      "arraylist": "Colección dinámica java.util.ArrayList con redimensionamiento automático. Acceso O(1), inserción amortizada O(1), búsquedas y filtros O(n).",
      "pilas": "Estructura LIFO (Last In, First Out). Operaciones Push (apilar), Pop (desapilar) y Peek (consultar cima) en tiempo constante O(1).",
      "colas": "Estructura FIFO (First In, First Out). Operaciones encolar al final y desencolar del frente en tiempo O(1) usando aritmética modular en cola circular o punteros inicio/fin en cola enlazada."
    }
  },
  "cursos": {
    "algoritmos": {
      "id": "algoritmos",
      "pagina": "algoritmos.html",
      "containerId": "units-algoritmos",
      "nombre": "Algoritmos y Estructura de Datos",
      "docente": "Mg. Raúl Enrique Fernández Bejarano",
      "ciclo": "IV Ciclo · Plan 2022",
      "creditos": "03 Créditos",
      "unidades": [
        {
          "id": "unidad-1",
          "dot": "U01",
          "titulo": "CONCEPTOS DE ALGORITMOS Y ESTRUCTURAS DE DATOS",
          "semanas": "Semanas 01 - 04",
          "abierta": false,
          "entregas": [
            {
              "id": "alg-sem-1",
              "numero": 1,
              "semana": "Semana 01",
              "nombre": "Arreglos Bidimensionales",
              "tema": "Arreglos Bidimensionales",
              "tipo": "imagenes",
              "releaseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/tag/iimg",
              "baseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/",
              "resumenChatbot": "Semana 01 de Algoritmos: 9 ejercicios prácticos sobre arreglos bidimensionales y vectores en Java (eliminación, modificación, inserción, sumas, promedios y desplazamientos).",
              "explicacionTecnica": "Desarrolla los fundamentos de indexación y manipulación de arreglos en Java, controlando la capacidad física frente a la cantidad lógica de elementos y realizando desplazamientos en memoria para inserciones y eliminaciones.",
              "patron": { "cantidad": 9, "prefijoNombre": "Ejercicio ", "prefijoArchivo": "Ejercicio_", "pad": 2 }
            },
            {
              "id": "alg-sem-2",
              "numero": 2,
              "semana": "Semana 02",
              "nombre": "Arreglos Paralelos y de Objetos",
              "tema": "Matrices, Arreglos Paralelos y de Objetos",
              "tipo": "imagenes",
              "releaseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/tag/iimg",
              "baseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/iimg/",
              "resumenChatbot": "Semana 02 de Algoritmos: 10 ejercicios (Ejercicio 2.01 al 2.10) sobre recorridos matriciales, sumas en patrones geométricos (letras L, J, U), mínimos por fila, conteo de pares e intercambio de filas.",
              "explicacionTecnica": "Utiliza matrices recorridas con bucles anidados para procesar filas, columnas y bordes condicionales (patrones L, J, U), además de cálculos estadísticos y permutación de filas.",
              "patron": { "cantidad": 10, "prefijoNombre": "Ejercicio 2.", "prefijoArchivo": "Ejercicio_2_", "pad": 2 }
            },
            {
              "id": "alg-sem-3",
              "numero": 3,
              "semana": "Semana 03",
              "nombre": "Arreglos Paralelos",
              "tema": "Arreglos Paralelos (5 Enunciados, 25 métodos)",
              "tipo": "imagenes",
              "releaseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/tag/semana03-algoritmo",
              "baseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/semana03-algoritmo/",
              "resumenChatbot": "Semana 03 de Algoritmos: 25 infografías distribuidas en 5 ejercicios de Arreglos Paralelos en Java (Enunciado01 al Enunciado05: registro de alumnos, gestión de empleados, promedio de 3 notas, estadísticas individuales y ordenamiento paralelo).",
              "explicacionTecnica": "Sincroniza múltiples arreglos primitivos/String mediante un mismo índice lógico numAlu. En las operaciones de ordenamiento se intercambian simultáneamente las posiciones i y j en todos los vectores paralelos para mantener la integridad de cada registro.",
              "ejercicios": [
                {
                  "numero": "01",
                  "titulo": "Ejercicio 01",
                  "tema": "Registro de alumnos y cálculo de promedio general en main (Enunciado01.java)",
                  "explicacion": "Utiliza tres arreglos paralelos (codigo[], nombre[], notas[]) controlados por numAlu dentro de main() con menú do-while: el Método 1 registra alumnos validando entradas y el Método 2 imprime la tabla formateada calculando el promedio general.",
                  "metodos": ["Método 1", "Método 2"]
                },
                {
                  "numero": "02",
                  "titulo": "Ejercicio 02",
                  "tema": "Gestión modular de empleados con arreglos paralelos (Enunciado02.java)",
                  "explicacion": "Divide en 4 métodos la lectura, listado, búsqueda y cálculo de sueldos de empleados almacenados en vectores paralelos.",
                  "metodos": ["Método 1", "Método 2", "Método 3", "Método 4"]
                },
                {
                  "numero": "03",
                  "titulo": "Ejercicio 03",
                  "tema": "Evaluación académica con 3 notas en paralelo (Enunciado03.java)",
                  "explicacion": "Administra vectores paralelos para tres evaluaciones y calcula el promedio y condición de cada estudiante a través de 4 métodos.",
                  "metodos": ["Método 1", "Método 2", "Método 3", "Método 4"]
                },
                {
                  "numero": "04",
                  "titulo": "Ejercicio 04",
                  "tema": "Promedio individual, búsquedas y extremos (Enunciado04.java)",
                  "explicacion": "Implementa 6 métodos modulares para ingreso, cálculo de promedios individuales, búsquedas por criterio y determinación de nota mayor y menor.",
                  "metodos": ["Método 1", "Método 2", "Método 3", "Método 4", "Método 5", "Método 6"]
                },
                {
                  "numero": "05",
                  "titulo": "Ejercicio 05",
                  "tema": "Ordenamiento sincronizado y reportes de alumnos (Enunciado05.java)",
                  "explicacion": "Contiene 9 métodos que incluyen el ordenamiento de alumnos manteniendo sincronizados sus arreglos de código, nombre y notas.",
                  "metodos": ["Método 1", "Método 2", "Método 3", "Método 4", "Método 5", "Método 6", "Método 7", "Método 8", "Método 9"]
                }
              ]
            },
            {
              "id": "alg-sem-4",
              "numero": 4,
              "semana": "Semana 04",
              "nombre": "Arreglos de Objetos",
              "tema": "Programación Orientada a Objetos con Arreglos de Objetos (25 métodos)",
              "tipo": "imagenes",
              "releaseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/tag/semana04-algoritmo",
              "baseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/semana04-algoritmo/",
              "resumenChatbot": "Semana 04 de Algoritmos: 25 infografías en 2 actividades con arquitectura Modelo-DAO-Vista: Ejercicio 01 (Alumno y ArregloAlumno con 10 métodos) y Ejercicio 02 (Computadora y ArregloComputadora con 15 métodos).",
              "explicacionTecnica": "Encapsula los datos en objetos (Alumno, Computadora) almacenados en un vector tipado dentro de la clase DAO (ArregloAlumno, ArregloComputadora), implementando CRUD completo, ordenamientos por mérito/alfabético/RAM/ID y reportes estadísticos.",
              "ejercicios": [
                {
                  "numero": "01",
                  "titulo": "Ejercicio 01",
                  "tema": "Control académico con arreglo de objetos Alumno[] (ArregloAlumno.java)",
                  "explicacion": "Gestiona objetos Alumno mediante 10 métodos: estado por promedio, filtro de aprobados y desaprobados, alumno con mejor y peor promedio, promedio general del aula, ordenamiento alfabético y por mérito, porcentaje de aprobación y búsqueda por nombre.",
                  "metodos": [
                    "mostrarPromediosEstado()", "listarAprobados()", "listarDesaprobados()",
                    "alumnoMejorPromedio()", "alumnoPeorPromedio()", "promedioGeneralAula()",
                    "ordenarAlfabeticamente()", "ordenarPorMerito()", "porcentajeAprobacion()", "buscarPorNombre()"
                  ]
                },
                {
                  "numero": "02",
                  "titulo": "Ejercicio 02",
                  "tema": "Inventario de hardware con arreglo de objetos Computadora[] (ArregloComputadora.java)",
                  "explicacion": "Administra un arreglo de objetos Computadora mediante 15 métodos: registrar, listarTodas, buscarPorId, modificar, eliminar con desplazamiento de referencias, listarPorEstado, computadoraMayorRam, computadoraMenorAlmacenamiento, contarPorEstado, reporteCompleto, ordenarPorId, ordenarPorRam, buscarPorMarca, promedioRam y promedioAlmacenamiento.",
                  "metodos": [
                    "registrar()", "listarTodas()", "buscarPorId()", "modificar()", "eliminar()",
                    "listarPorEstado()", "computadoraMayorRam()", "computadoraMenorAlmacenamiento()",
                    "contarPorEstado()", "reporteCompleto()", "ordenarPorId()", "ordenarPorRam()",
                    "buscarPorMarca()", "promedioRam()", "promedioAlmacenamiento()"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "unidad-2",
          "dot": "U02",
          "titulo": "PILAS, COLAS Y RECURSIVIDAD",
          "semanas": "Semanas 05 - 08",
          "abierta": true,
          "entregas": [
            {
              "id": "alg-sem-5",
              "numero": 5,
              "semana": "Semana 05",
              "nombre": "ArrayList y ArrayList de Objetos",
              "tema": "Colecciones Dinámicas ArrayList (31 métodos)",
              "tipo": "imagenes",
              "releaseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/tag/semana05-algoritmos",
              "baseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/semana05-algoritmos/",
              "resumenChatbot": "Semana 05 de Algoritmos: 31 infografías usando java.util.ArrayList: Ejercicio 01 (DAOAlumno con 10 métodos de búsqueda, carrera, ordenamiento, extremos y rangos) y Ejercicio 02 (Sistema académico relacional de Estudiantes, Cursos y Matrículas con 21 métodos).",
              "explicacionTecnica": "Aprovecha el redimensionamiento dinámico de ArrayList<T> y sus métodos nativos (add, get, set, remove, size) para construir un sistema relacional en memoria que vincula Estudiantes, Cursos y Matrículas mediante códigos únicos.",
              "ejercicios": [
                {
                  "numero": "01",
                  "titulo": "Ejercicio 01",
                  "tema": "Operaciones sobre ArrayList de objetos Alumno (DAOAlumno.java)",
                  "explicacion": "Implementa 10 métodos sobre ArrayList<Alumno>: búsqueda por nombre, listado y conteo por carrera, ordenamiento por apellidos y edad, inversión de lista, obtención del primer y último registro, eliminación por carrera y consulta por rango de índices.",
                  "metodos": [
                    "buscarPorNombre()", "listarPorCarrera()", "ordenarPorApellidos()",
                    "ordenarPorEdad()", "invertirLista()", "obtenerPrimero()",
                    "obtenerUltimo()", "eliminarPorCarrera()", "contarPorCarrera()", "mostrarRango()"
                  ]
                },
                {
                  "numero": "02",
                  "titulo": "Ejercicio 02",
                  "tema": "Sistema de Estudiantes, Cursos y Matrículas con ArrayList (21 métodos)",
                  "explicacion": "Integra tres clases DAO con ArrayList (DAOEstudiante, DAOCurso y DAOMatricula): gestiona el CRUD de estudiantes (M1-M5), CRUD de cursos (M6-M10), registro y gestión de matrículas y notas (M11-M15), y reportes analíticos como promedio por estudiante, ranking académico de mérito, filtro por carrera, desaprobados y mejor promedio (M16-M21).",
                  "metodos": [
                    "registrarEstudiante()", "listarEstudiantes()", "buscarEstudiante()", "modificarEstudiante()",
                    "eliminarEstudiante()", "registrarCurso()", "listarCursos()", "buscarCurso()",
                    "modificarCurso()", "eliminarCurso()", "registrarMatricula()", "listarMatriculas()",
                    "consultarCursosEstudiante()", "modificarNota()", "eliminarMatricula()", "promedioEstudiante()",
                    "rankingAcademico()", "estudiantesPorCarrera()", "estudiantesDesaprobados()",
                    "mejorPromedio()", "menu() · [21] Salir"
                  ]
                }
              ]
            },
            {
              "id": "alg-sem-6",
              "numero": 6,
              "semana": "Semana 06",
              "nombre": "Pilas (estática, dinámica y deshacer/rehacer)",
              "tema": "Pilas LIFO: Estática, Dinámica Enlazada y Undo/Redo (29 métodos)",
              "tipo": "imagenes",
              "releaseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/tag/semana06-algoritmos-corregido",
              "baseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/semana06-algoritmos-corregido/",
              "resumenChatbot": "Semana 06 de Algoritmos: 29 infografías sobre Pilas (LIFO): Ejercicio 01 Pila estática de alumnos con arreglo y tope (10 métodos); Ejercicio 02 Pila dinámica con nodos enlazados de computadoras (11 métodos); Ejercicio 03 Historial Undo/Redo con dos pilas dinámicas (8 métodos).",
              "explicacionTecnica": "Implementa el TDA Pila bajo el principio LIFO (Last In, First Out) tanto en memoria estática (arreglo con índice tope) como en memoria dinámica (lista enlazada con puntero cima, donde Push y Pop operan en O(1) sin límite fijo), culminando con una arquitectura de doble pila para Deshacer y Rehacer acciones.",
              "ejercicios": [
                {
                  "numero": "01",
                  "titulo": "Ejercicio 01",
                  "tema": "Pila estática de alumnos con arreglo (PilaAlumno.java)",
                  "explicacion": "Controla un arreglo estático Alumno[] mediante el puntero tope. Incluye insertarPila [Push], mostrarPila, eliminaDatos [Pop], eliminaPila, consultarCima [Peek], mostrarEstadoCapacidad, buscarAlumnoPorCodigo, verificarEstadoLogico (vacía/llena) y mostrarMejorPromedio.",
                  "metodos": [
                    "insertarPila() [Push]", "mostrarPila()", "eliminaDatos() [Pop]", "eliminaPila()",
                    "consultarCima() [Peek]", "mostrarEstadoCapacidad()", "buscarAlumnoPorCodigo()",
                    "verificarEstadoLogico()", "mostrarMejorPromedio()", "menu() · 10. Salir"
                  ]
                },
                {
                  "numero": "02",
                  "titulo": "Ejercicio 02",
                  "tema": "Pila dinámica de inventario de computadoras con nodos enlazados (PilaInventario.java)",
                  "explicacion": "Usa nodos autorreferenciados (Nodo con puntero siguiente) desde la referencia cima. Incluye apilarComputadora [Push], mostrarInventario, desapilarComputadora [Pop], consultarCima [Peek], limpiarInventario, contarComputadoras, buscarPorSerie, calcularValorInventario, mostrarEquiposSuperioresA y obtenerEquipoMasCaro.",
                  "metodos": [
                    "apilarComputadora() [Push]", "mostrarInventario()", "desapilarComputadora() [Pop]",
                    "consultarCima() [Peek]", "limpiarInventario()", "contarComputadoras()",
                    "buscarPorSerie()", "calcularValorInventario()", "mostrarEquiposSuperioresA()",
                    "obtenerEquipoMasCaro()", "menu() · 11. Salir"
                  ]
                },
                {
                  "numero": "03",
                  "titulo": "Ejercicio 03",
                  "tema": "Historial Deshacer/Rehacer (Undo/Redo) con dos pilas (GestorDocumento.java)",
                  "explicacion": "Coordina dos pilas dinámicas (pilaDeshacer y pilaRehacer): ejecutarNuevaAccion apila en Undo y limpia Redo; deshacerAccion [Undo] mueve la cima hacia Redo; rehacerAccion [Redo] restituye la cima hacia Undo. Incluye mostrarEstadoHistorial, buscarAccionEnHistorial, invertirPilaAcciones y exportarHistorialResumen.",
                  "metodos": [
                    "ejecutarNuevaAccion()", "deshacerAccion() [Undo]", "rehacerAccion() [Redo]",
                    "mostrarEstadoHistorial()", "buscarAccionEnHistorial()", "invertirPilaAcciones()",
                    "exportarHistorialResumen()", "menu() · 8. Salir"
                  ]
                }
              ]
            },
            {
              "id": "alg-sem-7",
              "numero": 7,
              "semana": "Semana 07",
              "nombre": "Colas (estática circular y dinámicas)",
              "tema": "Colas FIFO: Circular Estática y Dinámicas con Nodo Centinela (32 métodos)",
              "tipo": "imagenes",
              "releaseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/tag/semana07-algoritmos",
              "codigoUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/semana07-algoritmos/Semana07_codigo_alexito.zip",
              "baseUrl": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/semana07-algoritmos/",
              "resumenChatbot": "Semana 07 de Algoritmos: 32 infografías y código fuente Java 17 descargable (Semana07_codigo_alexito.zip): Ejercicio 01 Cola circular de alumnos (GestorColaAlumnos, 14 métodos); Ejercicio 02 Cola dinámica de turnos bancarios T-001 (GestorTurnos, 9 métodos); Ejercicio 03 Cola dinámica de órdenes de cocina O-01 con monto recursivo (GestorPedidos, 9 métodos).",
              "explicacionTecnica": "En la versión de Alexito-Hub (Java 17+, documentada con Javadoc y switch con flechas), el Ejercicio 01 (GestorColaAlumnos) implementa una cola circular usando inicio, fin (próxima casilla libre), numElementos, método auxiliar posicion(k), baja desplazando casillas e inversión con java.util.Stack. El Ejercicio 02 (GestorTurnos) genera tickets correlativos T-001 sobre nodos enlazados (NodoTicket). El Ejercicio 03 (GestorPedidos) genera códigos O-01 automáticos, anula órdenes usando un nodo centinela y calcula el monto acumulado de forma recursiva.",
              "ejercicios": [
                {
                  "numero": "01",
                  "titulo": "Ejercicio 01",
                  "tema": "Cola estática circular de alumnos (GestorColaAlumnos.java y AppColaAlumnos.java)",
                  "explicacion": "Administra una cola circular con punteros inicio, fin y numElementos, apoyada en el método posicion(k) = (inicio + k) % CAPACIDAD. Operaciones: encolar(), desencolar(), verFrente(), listar(), colaVacia(), colaLlena(), getCantidad(), buscarAlumno(), promedioGrupo(), filtrarPorNota(), obtenerExtremos() (mayor y menor nota), invertirOrden() con java.util.Stack y darDeBaja() desplazando casillas circulares.",
                  "metodos": [
                    "encolar()", "desencolar()", "verFrente()", "listar()", "colaVacia()",
                    "colaLlena()", "getCantidad()", "buscarAlumno()", "promedioGrupo()",
                    "filtrarPorNota()", "obtenerExtremos()", "invertirOrden()", "darDeBaja()", "menu()  ·  0. Salir"
                  ]
                },
                {
                  "numero": "02",
                  "titulo": "Ejercicio 02",
                  "tema": "Cola dinámica de turnos bancarios con tickets correlativos (GestorTurnos.java y AppBanco.java)",
                  "explicacion": "Implementa una cola enlazada (Ticket, NodoTicket) con punteros cabeza y cola que genera códigos automáticos T-001, T-002. Métodos: registrarTurno(), atenderTurno(), verSiguienteTurno(), listarEspera(), sinTurnos(), buscarTurno(), reportePorTramite() (conteo por Caja, Plataforma, Reclamos) y cancelarTurno().",
                  "metodos": [
                    "registrarTurno()", "atenderTurno()", "verSiguienteTurno()", "listarEspera()",
                    "sinTurnos()", "buscarTurno()", "reportePorTramite()", "cancelarTurno()", "menu()  ·  9. Salir"
                  ]
                },
                {
                  "numero": "03",
                  "titulo": "Ejercicio 03",
                  "tema": "Cola dinámica de órdenes de cocina con monto recursivo (GestorPedidos.java y AppCocina.java)",
                  "explicacion": "Gestiona órdenes gastronómicas (Orden, NodoOrden) con código autogenerado O-01. Métodos: registrarOrden(), despacharOrden(), verProximaOrden(), listarOrdenes(), sinOrdenes(), buscarOrden(), montoAcumulado() (calcula el total sumando recursivamente los nodos de la cola) y anularOrden() empleando un nodo centinela para simplificar el desenlace.",
                  "metodos": [
                    "registrarOrden()", "despacharOrden()", "verProximaOrden()", "listarOrdenes()",
                    "sinOrdenes()", "buscarOrden()", "montoAcumulado()", "anularOrden()", "menu()  ·  9. Salir"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "unidad-3",
          "dot": "U03",
          "titulo": "LISTAS ENLAZADAS",
          "semanas": "Semanas 09 - 12",
          "abierta": false,
          "entregas": []
        },
        {
          "id": "unidad-4",
          "dot": "U04",
          "titulo": "ARBOLES, GRAFOS, MÉTODOS DE ORDENACIÓN Y BÚSQUEDA",
          "semanas": "Semanas 13 - 16",
          "abierta": false,
          "entregas": []
        }
      ]
    },
    "taller": {
      "id": "taller",
      "pagina": "taller-vii.html",
      "containerId": "units-taller",
      "nombre": "Taller VII: Desarrollo de Aplicaciones I",
      "docente": "Laboratorio de Aplicaciones Web y Prototipado",
      "ciclo": "IV Ciclo · Plan 2022",
      "unidades": [
        {
          "id": "taller-u1",
          "dot": "U01",
          "titulo": "Introducción a Taller VII: Desarrollo de apps",
          "semanas": "Semanas 01 - 04",
          "abierta": true,
          "entregas": [
            {
              "id": "taller-sem-1",
              "numero": 1,
              "semana": "Semana 01",
              "nombre": "Desarrollo de trabajo en figma",
              "tema": "Prototipado UI/UX en Figma",
              "tipo": "figma",
              "url": "https://www.figma.com/design/oCzbZQH8LLbaF9meqa5jAt/Taller?node-id=2-417&t=31kaySltkgmQDZK3-1",
              "textoBtn": "Ver en Figma",
              "resumenChatbot": "Semana 01 de Taller VII: Diseño de prototipo interactivo y maquetación de pantallas en Figma.",
              "explicacionTecnica": "Define el sistema de diseño, wireframes, componentes visuales y flujo de interacción de usuario en Figma."
            },
            {
              "id": "taller-sem-2",
              "numero": 2,
              "semana": "Semana 02",
              "nombre": "Desarrollo de aplicación (.rar)",
              "tema": "Estructura de proyecto y desarrollo de aplicación (Ale.rar)",
              "tipo": "rar",
              "url": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/semana-apps/Ale.rar",
              "textoBtn": "Descargar .rar",
              "resumenChatbot": "Semana 02 de Taller VII: Entregable práctico de desarrollo de aplicación empaquetado en Ale.rar en GitHub Releases.",
              "explicacionTecnica": "Proyecto de aplicación configurado con estructura modular y dependencias empaquetado en Ale.rar para su compilación y despliegue."
            },
            {
              "id": "taller-sem-3",
              "numero": 3,
              "semana": "Semana 03",
              "nombre": "Desarrollo de Semana 03 Actividades 1 y 2",
              "tema": "Actividades 1 y 2 de Desarrollo de Aplicaciones (Semana03.rar)",
              "tipo": "rar",
              "url": "https://github.com/Alexito-Hub/Alexito-Hub/releases/download/Semana03-Taller/Semana03.rar",
              "textoBtn": "Descargar .rar",
              "resumenChatbot": "Semana 03 de Taller VII: Archivo descargable Semana03.rar con la implementación completa de las Actividades 1 y 2.",
              "explicacionTecnica": "Incluye la solución de software de las Actividades 1 y 2 correspondientes a la tercera semana del laboratorio de desarrollo de aplicaciones."
            }
          ]
        }
      ]
    }
  }
};

let portafolioDataCache = null;

function padNumber(num, size = 2) {
  let s = String(num);
  while (s.length < size) s = '0' + s;
  return s;
}

// Expande automáticamente patrones o listas de ejercicios/métodos en el arreglo imagenes[]
function expandDeliveryImages(entrega) {
  if (Array.isArray(entrega.imagenes) && entrega.imagenes.length > 0) {
    return entrega.imagenes;
  }

  const baseUrl = entrega.baseUrl || '';
  const result = [];

  if (entrega.patron) {
    const total = entrega.patron.cantidad || 0;
    const pad = entrega.patron.pad || 2;
    const prefNombre = entrega.patron.prefijoNombre || 'Ejercicio ';
    const prefArchivo = entrega.patron.prefijoArchivo || 'Ejercicio_';
    const ext = entrega.patron.ext || '.png';

    for (let i = 1; i <= total; i++) {
      const code = padNumber(i, pad);
      result.push({
        nombre: `${prefNombre}${code}`,
        url: `${baseUrl}${prefArchivo}${code}${ext}`,
        indiceGlobal: result.length
      });
    }
    return result;
  }

  if (Array.isArray(entrega.ejercicios)) {
    entrega.ejercicios.forEach(ej => {
      const metodos = ej.metodos || [];
      metodos.forEach((m, idx) => {
        const mNum = idx + 1;
        const label = m.startsWith('Método')
          ? `Ejercicio ${ej.numero} - ${m}`
          : `Ejercicio ${ej.numero} - Método ${mNum}: ${m}`;
        result.push({
          nombre: label,
          metodo: m,
          ejercicio: ej.numero,
          metodoNumero: mNum,
          url: `${baseUrl}${ej.numero}-M${mNum}.png`,
          indiceGlobal: result.length
        });
      });
    });
  }

  return result;
}

function normalizePortafolioData(data) {
  if (!data || !data.cursos) return data;
  Object.keys(data.cursos).forEach(courseKey => {
    const curso = data.cursos[courseKey];
    if (!curso || !Array.isArray(curso.unidades)) return;
    curso.unidades.forEach(unidad => {
      if (!Array.isArray(unidad.entregas)) return;
      unidad.entregas.forEach(entrega => {
        if (entrega.tipo === 'imagenes') {
          entrega.imagenes = expandDeliveryImages(entrega);
          entrega.cantidad = entrega.imagenes.length;
          galleries[entrega.id] = {
            title: `${entrega.semana} · ${entrega.nombre}`,
            items: entrega.imagenes
          };
        }
      });
    });
  });
  return data;
}

function loadPortafolioData() {
  if (portafolioDataCache) return Promise.resolve(portafolioDataCache);
  return fetch('data/portafolio.json')
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      portafolioDataCache = normalizePortafolioData(data);
      return portafolioDataCache;
    })
    .catch(() => {
      portafolioDataCache = normalizePortafolioData(JSON.parse(JSON.stringify(FALLBACK_DATA)));
      return portafolioDataCache;
    });
}

window.getPortafolioData = loadPortafolioData;
window.expandDeliveryImages = expandDeliveryImages;

// ==========================================
// ANIMACIÓN DE FONDO: CYBER MATRIX RAIN
// ==========================================
function initMatrixBackground() {
  if (document.getElementById('matrix-bg-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-bg-canvas';
  canvas.setAttribute('aria-hidden', 'true');
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

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frameId = null;
  let lastTime = 0;
  const fpsInterval = 1000 / 25;

  function draw(currentTime) {
    frameId = requestAnimationFrame(draw);
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
        ctx.fillStyle = '#38bdf8';
      } else if (Math.random() > 0.6) {
        ctx.fillStyle = '#818cf8';
      } else {
        ctx.fillStyle = '#475569';
      }

      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  function updateMotion() {
    if (frameId !== null) cancelAnimationFrame(frameId);
    frameId = null;
    if (motionPreference.matches) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      lastTime = 0;
      frameId = requestAnimationFrame(draw);
    }
  }
  motionPreference.addEventListener('change', updateMotion);
  updateMotion();
}

// ==========================================
// REGISTRO DE GALERÍAS Y VISOR DE IMÁGENES CON ZOOM Y PANEO
// ==========================================
const galleries = {};
let activeGalleryId = null;
let activeGalleryIndex = 0;

let currentZoom = 1;
const minZoom = 1;
const maxZoom = 4.5;
let panX = 0;
let panY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let touchStartDist = 0;
let touchStartZoom = 1;

function applyTransform(animate = false) {
  const imgEl = document.getElementById('gallery-modal-img');
  const imgContainer = document.getElementById('gallery-img-container');
  const zoomLevelEl = document.getElementById('gallery-zoom-level');
  if (!imgEl) return;

  imgEl.style.transition = animate ? 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
  imgEl.style.transform = `translate(${panX}px, ${panY}px) scale(${currentZoom})`;

  if (zoomLevelEl) {
    zoomLevelEl.textContent = `${Math.round(currentZoom * 100)}%`;
    zoomLevelEl.classList.toggle('active-zoom', currentZoom > 1.05);
  }

  if (imgContainer) {
    imgContainer.classList.toggle('is-zoomed', currentZoom > 1.05);
    if (currentZoom <= 1.05) {
      imgContainer.classList.remove('is-dragging');
    }
  }
}

function clampPan() {
  const imgContainer = document.getElementById('gallery-img-container');
  if (!imgContainer || currentZoom <= 1.05) {
    panX = 0;
    panY = 0;
    return;
  }

  const containerRect = imgContainer.getBoundingClientRect();
  const maxPanX = Math.max(0, (containerRect.width * (currentZoom - 1)) / 2 + 100);
  const maxPanY = Math.max(0, (containerRect.height * (currentZoom - 1)) / 2 + 100);

  panX = Math.max(-maxPanX, Math.min(maxPanX, panX));
  panY = Math.max(-maxPanY, Math.min(maxPanY, panY));
}

function setZoom(targetZoom, clientX = null, clientY = null, animate = true) {
  const clamped = Math.min(maxZoom, Math.max(minZoom, Math.round(targetZoom * 100) / 100));
  if (Math.abs(clamped - currentZoom) < 0.01 && clamped !== 1) return;

  const imgContainer = document.getElementById('gallery-img-container');
  if (clamped <= 1) {
    resetZoom(animate);
    return;
  }

  if (clientX !== null && clientY !== null && imgContainer) {
    const rect = imgContainer.getBoundingClientRect();
    const offsetX = clientX - (rect.left + rect.width / 2);
    const offsetY = clientY - (rect.top + rect.height / 2);

    const zoomRatio = clamped / currentZoom;
    panX = offsetX - (offsetX - panX) * zoomRatio;
    panY = offsetY - (offsetY - panY) * zoomRatio;
  } else {
    const zoomRatio = clamped / currentZoom;
    panX = panX * zoomRatio;
    panY = panY * zoomRatio;
  }

  currentZoom = clamped;
  clampPan();
  applyTransform(animate);
}

function resetZoom(animate = true) {
  currentZoom = 1;
  panX = 0;
  panY = 0;
  applyTransform(animate);
}

function toggleFullscreen() {
  const modal = document.getElementById('gallery-modal');
  if (!modal) return;
  if (!document.fullscreenElement) {
    if (modal.requestFullscreen) modal.requestFullscreen().catch(() => { });
    else if (modal.webkitRequestFullscreen) modal.webkitRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen().catch(() => { });
  }
}

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
          <div class="gallery-zoom-bar" role="group" aria-label="Controles de zoom">
            <button type="button" class="gallery-btn-zoom" id="gallery-zoom-out" aria-label="Reducir zoom" title="Alejar (-)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </button>
            <span class="gallery-zoom-tag" id="gallery-zoom-level" title="Nivel de zoom">100%</span>
            <button type="button" class="gallery-btn-zoom" id="gallery-zoom-in" aria-label="Aumentar zoom" title="Acercar (+)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </button>
            <button type="button" class="gallery-btn-zoom" id="gallery-zoom-reset" aria-label="Restablecer tamaño original" title="Restablecer 1:1 (tecla 0)">
              1:1
            </button>
            <button type="button" class="gallery-btn-zoom" id="gallery-fullscreen" aria-label="Pantalla completa" title="Pantalla completa (tecla F)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
            </button>
          </div>

          <a id="gallery-modal-ext" href="#" target="_blank" rel="noopener noreferrer" class="gallery-btn" title="Abrir imagen original en nueva pestaña">
            <span>Descargar</span>
          </a>
          <button type="button" class="gallery-btn gallery-btn-close" id="gallery-modal-close" aria-label="Cerrar">&times;</button>
        </div>
      </div>

      <div class="gallery-stage">
        <button type="button" class="gallery-nav-btn gallery-prev" id="gallery-modal-prev" aria-label="Anterior">‹</button>
        <div class="gallery-img-container" id="gallery-img-container" title="Doble clic o rueda para agrandar. Arrastra para mover">
          <div class="gallery-loader" id="gallery-modal-loader"></div>
          <img id="gallery-modal-img" src="" alt="Captura del ejercicio" draggable="false" />
          <div class="gallery-zoom-hint" id="gallery-zoom-hint">
            <span><kbd>Rueda</kbd> o <kbd>Doble clic</kbd> para zoom &bull; <kbd>Arrastrar</kbd> para explorar</span>
          </div>
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
  const zoomInBtn = document.getElementById('gallery-zoom-in');
  const zoomOutBtn = document.getElementById('gallery-zoom-out');
  const zoomResetBtn = document.getElementById('gallery-zoom-reset');
  const fsBtn = document.getElementById('gallery-fullscreen');
  const imgContainer = document.getElementById('gallery-img-container');

  if (closeBtn) closeBtn.addEventListener('click', closeGallery);
  if (prevBtn) prevBtn.addEventListener('click', () => navigateGallery(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateGallery(1));

  if (zoomInBtn) zoomInBtn.addEventListener('click', () => setZoom(currentZoom + 0.35, null, null, true));
  if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => setZoom(currentZoom - 0.35, null, null, true));
  if (zoomResetBtn) zoomResetBtn.addEventListener('click', () => resetZoom(true));
  if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);

  if (imgContainer) {
    imgContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.25 : 0.8;
      setZoom(currentZoom * factor, e.clientX, e.clientY, true);
    }, { passive: false });

    imgContainer.addEventListener('dblclick', (e) => {
      e.preventDefault();
      if (currentZoom > 1.2) {
        resetZoom(true);
      } else {
        setZoom(2.2, e.clientX, e.clientY, true);
      }
    });

    imgContainer.addEventListener('mousedown', (e) => {
      if (e.button !== 0 || currentZoom <= 1.05) return;
      isDragging = true;
      dragStartX = e.clientX - panX;
      dragStartY = e.clientY - panY;
      imgContainer.classList.add('is-dragging');
      e.preventDefault();
    });

    imgContainer.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && currentZoom > 1.05) {
        isDragging = true;
        dragStartX = e.touches[0].clientX - panX;
        dragStartY = e.touches[0].clientY - panY;
      } else if (e.touches.length === 2) {
        isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        touchStartDist = Math.hypot(dx, dy);
        touchStartZoom = currentZoom;
      }
    }, { passive: true });

    imgContainer.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && isDragging) {
        panX = e.touches[0].clientX - dragStartX;
        panY = e.touches[0].clientY - dragStartY;
        clampPan();
        applyTransform(false);
      } else if (e.touches.length === 2 && touchStartDist > 0) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const factor = dist / touchStartDist;
        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        setZoom(touchStartZoom * factor, midX, midY, false);
      }
    }, { passive: true });

    imgContainer.addEventListener('touchend', () => {
      isDragging = false;
      touchStartDist = 0;
    });
  }

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    panX = e.clientX - dragStartX;
    panY = e.clientY - dragStartY;
    clampPan();
    applyTransform(false);
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      const c = document.getElementById('gallery-img-container');
      if (c) c.classList.remove('is-dragging');
    }
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeGallery();
    });
  }

  document.addEventListener('keydown', (e) => {
    const currentModal = document.getElementById('gallery-modal');
    if (!currentModal || !currentModal.classList.contains('open')) return;

    if (e.key === 'Escape') {
      if (currentZoom > 1.1) {
        resetZoom(true);
      } else if (document.fullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen().catch(() => { });
      } else {
        closeGallery();
      }
    } else if (e.key === 'ArrowLeft') {
      navigateGallery(-1);
    } else if (e.key === 'ArrowRight') {
      navigateGallery(1);
    } else if (e.key === '+' || e.key === '=') {
      setZoom(currentZoom + 0.35, null, null, true);
    } else if (e.key === '-' || e.key === '_') {
      setZoom(currentZoom - 0.35, null, null, true);
    } else if (e.key === '0') {
      resetZoom(true);
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    }
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

  resetZoom(false);
  renderGalleryThumbs();
  updateGalleryView();
}

function closeGallery() {
  const modal = document.getElementById('gallery-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  resetZoom(false);
  if (document.fullscreenElement) {
    if (document.exitFullscreen) document.exitFullscreen().catch(() => { });
  }
}

function navigateGallery(delta) {
  if (!activeGalleryId) return;
  const gallery = galleries[activeGalleryId];
  if (!gallery || !gallery.items.length) return;

  const total = gallery.items.length;
  activeGalleryIndex = (activeGalleryIndex + delta + total) % total;
  resetZoom(false);
  updateGalleryView();
}

function updateGalleryView() {
  const gallery = galleries[activeGalleryId];
  if (!gallery) return;

  resetZoom(false);
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
  const collapsed = unitBox.classList.toggle('collapsed');
  headerEl.setAttribute('aria-expanded', String(!collapsed));
  const panel = unitBox.querySelector('.unit-panel');
  if (panel) {
    panel.inert = collapsed;
    panel.setAttribute('aria-hidden', String(collapsed));
  }
}
window.toggleUnitAccordion = toggleUnitAccordion;

// ==========================================
// RENDERIZADO ESTRUCTURADO Y ORDENADO DE UNIDADES
// ==========================================
function renderUnits(containerId, unidades) {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(unidades)) return;

  container.innerHTML = unidades.map((unidad, i) => {
    const hasEntregas = unidad.entregas && unidad.entregas.length > 0;
    const isInitiallyOpen = unidad.abierta !== undefined ? unidad.abierta : hasEntregas;
    const collapsedClass = isInitiallyOpen ? '' : 'collapsed';
    const unitDomId = unidad.id || `${containerId}-unit-${i + 1}`;

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
          `;
          if (e.codigoUrl) {
            actionsHtml += `
              <a href="${e.codigoUrl}" download class="btn-clean btn-amber">Descargar codigo</a>
            `;
          }
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
              ${e.textoBtn || 'Ver en Figma'}
            </a>
          `;
        }

        return `
          <div class="delivery-row" id="${e.id || ''}">
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
      <section class="unit-box ${collapsedClass}" id="${unitDomId}">
        <div class="unit-box-header" onclick="toggleUnitAccordion(this)" onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleUnitAccordion(this); }" role="button" tabindex="0" aria-expanded="${isInitiallyOpen}" aria-controls="${containerId}-panel-${i}" title="Expandir o contraer unidad">
          <div class="unit-title-group">
            <span class="unit-tag">${unidad.dot || ('U0' + (i + 1))}</span>
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
        <div class="unit-panel" id="${containerId}-panel-${i}" aria-hidden="${!isInitiallyOpen}" ${isInitiallyOpen ? '' : 'inert'}>
          <div class="unit-panel-inner">
            <div class="unit-deliveries-list">
              ${entregasHtml}
            </div>
          </div>
        </div>
      </section>`;
  }).join('');
}

// ==========================================
// NAVEGACIÓN PROFUNDA Y ACCIONES INTERACTIVAS (PARA CHATBOT)
// ==========================================
function focusDeliveryInDom(unitId, weekId) {
  let unitBox = unitId ? document.getElementById(unitId) : null;
  const deliveryEl = weekId ? document.getElementById(weekId) : null;

  if (!unitBox && deliveryEl) {
    unitBox = deliveryEl.closest('.unit-box');
  }

  if (unitBox && unitBox.classList.contains('collapsed')) {
    const header = unitBox.querySelector('.unit-box-header');
    if (header) toggleUnitAccordion(header);
  }

  const target = deliveryEl || unitBox;
  if (target) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);
  }
}

window.navigateToPortfolioTarget = function (options) {
  if (!options) return;
  const targetPage = options.page || 'algoritmos.html';
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  if (currentPath === targetPage) {
    if (options.unitId || options.weekId) {
      focusDeliveryInDom(options.unitId, options.weekId);
    }
    if (options.galleryId && typeof window.openGallery === 'function') {
      window.openGallery(options.galleryId, options.galleryIndex || 0);
    }
    return;
  }

  const params = new URLSearchParams();
  if (options.unitId) params.set('unit', options.unitId);
  if (options.weekId) params.set('week', options.weekId);
  if (options.galleryId) params.set('gallery', options.galleryId);
  if (options.galleryIndex !== undefined) params.set('idx', String(options.galleryIndex));
  window.location.href = `${targetPage}?${params.toString()}`;
};

function handleUrlDeepLinks() {
  const params = new URLSearchParams(window.location.search);
  const unitId = params.get('unit');
  const weekId = params.get('week');
  const galleryId = params.get('gallery');
  const idx = parseInt(params.get('idx') || '0', 10);

  if (unitId || weekId) {
    focusDeliveryInDom(unitId, weekId);
  }
  if (galleryId && galleries[galleryId]) {
    setTimeout(() => {
      openGallery(galleryId, isNaN(idx) ? 0 : idx);
    }, 150);
  }
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

  loadPortafolioData().then(data => {
    if (data && data.cursos) {
      if (data.cursos.algoritmos) {
        renderUnits('units-algoritmos', data.cursos.algoritmos.unidades);
      }
      if (data.cursos.taller) {
        renderUnits('units-taller', data.cursos.taller.unidades);
      }
    }
    handleUrlDeepLinks();
  });
});
