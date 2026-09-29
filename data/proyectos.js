// Datos de los proyectos (antes estaban repetidos en cada archivo .html)
module.exports = [
  {
    slug: 'reusa-app',
    titulo: 'ReUsa App',
    subtitulo: 'Aplicación móvil para reutilización y donación de prendas',
    resumen:
      'Aplicación móvil desarrollada con Flutter y Dart orientada a facilitar la reutilización y donación de prendas de vestir. El proyecto utiliza SQLite para el almacenamiento local y Firebase Authentication para la gestión de usuarios.',
    stack: 'Flutter · Dart · SQLite',
    imgMini: 'reusa-app.jpeg',
    imgDetalle: 'reusa-app02.png',
    intro:
      'ReUsa App es una aplicación móvil desarrollada durante mi formación académica. El proyecto está orientado a facilitar la publicación y reutilización de prendas de vestir.',
    descripcion:
      'La aplicación permite a los usuarios visualizar prendas disponibles y publicar productos para su reutilización. El proyecto fue desarrollado utilizando Flutter y Dart.',
    tecnologias: ['Flutter', 'Dart', 'SQLite', 'Firebase Authentication'],
    listaTitulo: 'Principales funcionalidades',
    lista: [
      'Inicio de sesión de usuarios.',
      'Visualización de prendas.',
      'Publicación de prendas.',
      'Almacenamiento local mediante SQLite.',
      'Gestión de sesión de usuario.'
    ],
    objetivo:
      'El objetivo del proyecto es desarrollar una solución móvil que facilite la reutilización de prendas y permita conectar a personas interesadas en donar o encontrar productos.'
  },
  {
    slug: 'simulador-paginas',
    titulo: 'Simulador de reemplazo de páginas',
    subtitulo: 'Simulación de algoritmos de reemplazo de páginas',
    resumen:
      'Aplicación web desarrollada con HTML, CSS y JavaScript para representar el funcionamiento de algoritmos de reemplazo de páginas, incluyendo conceptos como hits, faults, TLB y LFU.',
    stack: 'HTML · CSS · JavaScript',
    imgMini: 'simulador.jpg',
    imgDetalle: 'simulador02.png',
    intro:
      'Este proyecto consiste en un simulador desarrollado para representar el funcionamiento de diferentes algoritmos de reemplazo de páginas en memoria.',
    descripcion:
      'El simulador permite ingresar secuencias de páginas y observar cómo los diferentes algoritmos administran los marcos de memoria, identificando los accesos exitosos y los fallos de página.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
    listaTitulo: 'Conceptos trabajados',
    lista: ['Reemplazo de páginas.', 'Hits.', 'Faults.', 'TLB.', 'LFU.', 'Marcos de página.'],
    objetivo:
      'El objetivo es facilitar la comprensión del funcionamiento de los algoritmos de reemplazo de páginas mediante una representación visual e interactiva.'
  },
  {
    slug: 'sistema-archivos',
    titulo: 'Sistema de gestión de archivos',
    subtitulo: 'Proyecto académico de Sistemas Operativos',
    resumen:
      'Proyecto académico relacionado con Sistemas Operativos y la administración y manipulación de archivos mediante programas desarrollados en lenguaje C.',
    stack: 'C · Linux · Sistemas Operativos',
    imgMini: 'sistema-archivos.jpg',
    imgDetalle: 'sistema-archivos02.png',
    intro:
      'Proyecto desarrollado durante el estudio de Sistemas Operativos, enfocado en la administración y manipulación de archivos mediante lenguaje C.',
    descripcion:
      'El proyecto permite trabajar con operaciones relacionadas con archivos y directorios, comprendiendo cómo un sistema operativo administra la información almacenada.',
    tecnologias: ['Lenguaje C', 'Linux', 'Sistemas Operativos'],
    listaTitulo: 'Funcionalidades',
    lista: [
      'Creación de archivos.',
      'Consulta de información.',
      'Creación y gestión de directorios.',
      'Manipulación de archivos.',
      'Consulta de atributos.'
    ],
    objetivo: null
  },
  {
    slug: 'sistema-inventario',
    titulo: 'Sistema de Inventario',
    subtitulo: 'Aplicación web para gestión de productos',
    resumen:
      'Proyecto web orientado al registro y administración de productos, utilizando HTML, CSS y JavaScript para desarrollar la interfaz y la lógica de funcionamiento.',
    stack: 'HTML · CSS · JavaScript',
    imgMini: 'inventario.jpg',
    imgDetalle: 'inventario02.jpeg',
    intro:
      'Sistema web desarrollado para gestionar información relacionada con productos y facilitar su administración.',
    descripcion:
      'El proyecto utiliza tecnologías web nativas para construir una interfaz sencilla que permita registrar, visualizar y administrar productos.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
    listaTitulo: 'Funcionalidades',
    lista: [
      'Registro de productos.',
      'Visualización de información.',
      'Gestión de productos.',
      'Interfaz responsive.'
    ],
    objetivo:
      'El objetivo es aplicar los fundamentos del desarrollo web para construir una solución funcional orientada a la gestión de información.'
  }
];
