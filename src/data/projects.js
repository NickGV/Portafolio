import musicXplore from "/images/projects/musicXplore.webp";
import fyloLandingPage from "/images/projects/fyloLandingPage.webp";
import blogi from "/images/projects/blogi.webp";
import eComerce from "/images/projects/e-commerce.webp";
import contactEase from "/images/projects/contactEase.png";
import bookNest from "/images/projects/bookNest.png";
import GestorContractos from "/images/projects/GestorContractos.png";

const projects = [
  {
    id: 1,
    title: "ContactEase",
    description:
      "Aplicación web para gestión de contactos con chat en tiempo real y comunicación instantánea y busquedas integrada.",
    longDescription: "Sistema completo de gestión laboral desarrollado en equipo para simplificar el manejo de contratos de trabajo y cálculos de aportes al sistema de seguridad social colombiano. Me encargué del funcionamiento general de la aplicación, resolviendo problemas técnicos, delegando tareas y asegurando la calidad del código. Durante el desarrollo enfrentamos desafíos importantes relacionados con requerimientos mal definidos y cambios en la nomenclatura, lo que me enseñó la importancia crítica de la comunicación clara y la documentación consistente en proyectos colaborativos. La aplicación cuenta con un sistema de roles robusto que permite diferentes niveles de acceso para empleados, empleadores, contadores, asesores legales y entidades gubernamentales. Los usuarios pueden crear y gestionar contratos laborales, realizar cálculos automáticos de aportes (EPS, ARL, pensión, cesantías), y generar reportes detallados en formato PDF. Este proyecto no solo demuestra habilidades técnicas en desarrollo full-stack, sino también capacidades de liderazgo técnico y resolución de problemas en entornos colaborativos.",
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    thumbnail: contactEase,
    previewLink: "https://contactease-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/ConctactEase",
    videoUrl: "/videos/ContactEase.mp4",
    screenshots: [
      "/images/screenshots/ContactEase/screenshot1.png",
      "/images/screenshots/ContactEase/screenshot2.png",
      "/images/screenshots/ContactEase/screenshot3.png",
    ],
    featured: true,
    challenges: [
      {
        challenge: "Implementación del chat en tiempo real",
        solution: "Utilicé Socket.io para manejar la comunicación bidireccional y eventos en tiempo real."
      },
    ]
  },
  {
    id: 2,
     title: "Gestor de Contratos Laborales",
    description:
      "Aplicación web full—stack para la gestión de contratos laborales, cálculos de aportes al sistema de seguridad social colombiano y generación de reportes con sistema de roles integrado.",
    longDescription: "Sistema completo de gestión laboral desarrollado en equipo para simplificar el manejo de contratos de trabajo y cálculos de aportes al sistema de seguridad social colombiano. Como líder técnico del proyecto, me encargué del funcionamiento general de la aplicación, resolviendo problemas técnicos, delegando tareas y asegurando la calidad del código. Durante el desarrollo enfrentamos desafíos importantes relacionados con requerimientos mal definidos y cambios en la nomenclatura, lo que me enseñó la importancia crítica de la comunicación clara y la documentación consistente en proyectos colaborativos. La aplicación cuenta con un sistema de roles robusto que permite diferentes niveles de acceso para empleados, empleadores, contadores, asesores legales y entidades gubernamentales. Los usuarios pueden crear y gestionar contratos laborales, realizar cálculos automáticos de aportes (EPS, ARL, pensión, cesantías), y generar reportes detallados en formato PDF. Este proyecto no solo demuestra habilidades técnicas en desarrollo full-stack, sino también capacidades de liderazgo técnico y resolución de problemas en entornos colaborativos.",
    technologies: ["React", "Bootstrap", "Django", "PostgreSQL"],
    thumbnail: GestorContractos,
    previewLink: "",
    codeLink: "https://github.com/NickGV/Aplicativo_RegimenLaboral",
    videoUrl: "/videos/GestorContractos.mp4",
    screenshots: [
      "/images/screenshots/GestorContractosLaborales/screenshot1.png",
      "/images/screenshots/GestorContractosLaborales/screenshot2.png",
      "/images/screenshots/GestorContractosLaborales/screenshot3.png",
    ],
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "BookNest",
    description:
      "Aplicación full-stack para gestionar una biblioteca personal, con autenticación JWT y diseño responsivo.",
    longDescription: "BookNest es una aplicación full-stack diseñada para administrar tu biblioteca personal de forma sencilla y eficiente. Permite a los usuarios registrados añadir, editar, eliminar y visualizar información detallada de sus libros favoritos. Con una interfaz moderna y responsive, BookNest ofrece una experiencia de usuario fluida tanto en dispositivos móviles como de escritorio. La aplicación implementa autenticación mediante JWT para garantizar la seguridad de los datos de cada usuario.",
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    thumbnail: bookNest,
    previewLink: "https://booknest-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/BookNest",
    videoUrl: "/videos/BookNest.mp4",
    screenshots: [
      "/images/screenshots/BookNest/screenshot1.png",
      "/images/screenshots/BookNest/screenshot2.png",
      "/images/screenshots/BookNest/screenshot3.png",
    ],
    category: "Full Stack",
    featured: true,
  },
  {
    id: 4,
    title: "Blogi",
    description:
      "Aplicación de blogging React + Express que permite crear, leer, actualizar y eliminar posts, con soporte para Markdown y diseño responsivo.",
    longDescription: "Blogi es una aplicación de blogging construida con React que facilita la creación, edición y gestión de publicaciones. Ofrece una interfaz amigable donde los usuarios pueden escribir posts en Markdown, visualizarlos, y eliminarlos fácilmente. Con un diseño responsivo, Blogi se adapta a diferentes dispositivos, garantizando una buena experiencia tanto en desktop como en móviles. La aplicación está configurada para una futura integración de autenticación de usuarios y uso de bases de datos.",
    technologies: ["React", "TailwindCSS"],
    thumbnail: blogi,
    previewLink: "https://blogi-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/blog-react",
    videoUrl: "/videos/Blogi.mp4",
    screenshots: [
      "/images/screenshots/Blogi/screenshot1.png",
      "/images/screenshots/Blogi/screenshot2.png",
    ],
    category: "Frontend",
    featured: false,
  },
  {
    id: 5,
    title: "MusicXplore",
    description:
      "Aplicación web para explorar, reproducir, y gestionar canciones y playlists, con integración de la API de Spotify.",
    longDescription: "MusiXplore es una aplicación web diseñada para amantes de la música que buscan una forma sencilla de explorar, reproducir y organizar sus canciones favoritas. La aplicación permite buscar canciones y playlists utilizando la API de Spotify, ofreciendo resultados precisos y actualizados. Además, los usuarios pueden crear y gestionar playlists personalizadas, añadir canciones a sus favoritos y controlar la reproducción con facilidad a través de un reproductor integrado. Todo se gestiona localmente en la web, garantizando una experiencia fluida y accesible desde cualquier dispositivo.",
    technologies: ["React", "CSS"],
    thumbnail: musicXplore,
    previewLink: "https://musicxplore.netlify.app/",
    codeLink: "https://github.com/NickGV/MusicXplore",
    videoUrl: "/videos/MusicXplore.mp4",
    screenshots: [
      "/images/screenshots/MusicXplore/screenshot1.png",
      "/images/screenshots/MusicXplore/screenshot2.png",
    ],
    category: "Frontend",
    featured: true,
  },
  {
    id: 6,
    title: "Fylo landing page with translation",
    description:
      "Página de aterrizaje en React con traducción dinámica entre inglés y español, creada como un desafío de Frontendmentor.io.",
    longDescription: "Fylo Landing Page es una página de aterrizaje desarrollada en React, que ofrece traducción dinámica entre inglés y español. Este proyecto se realizó como parte de un desafío en Frontendmentor.io, utilizando una plantilla que fue adaptada y mejorada con componentes React reutilizables. La aplicación presenta un diseño responsivo, asegurando una experiencia de usuario consistente en diversos dispositivos y tamaños de pantalla. Utiliza la React Context API para manejar el estado del idioma y archivos JSON para gestionar y mantener los datos de traducción de manera eficiente.",
    technologies: ["React", "CSS"],
    thumbnail: fyloLandingPage,
    previewLink: "https://landing-page-with-translation-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/Fylo-Landing-Page-with-Translation",
    screenshots: [
      "/images/screenshots/Fylo/screenshot1.png",
      "/images/screenshots/Fylo/screenshot2.png",
    ],
    category: "Frontend",
    featured: false,
  },
  {
    id: 7,
    title: "E-Commerce",
    description:
      "Aplicación de comercio electrónico desarrollada en React y TailwindCSS, con gestión de productos, categorías, carrito de compras y opciones de pago.",
    longDescription: "E-commerce Project es una aplicación de comercio electrónico diseñada para practicar React y TailwindCSS. Ofrece una página de inicio con productos destacados, categorías y los artículos más valorados. Los usuarios pueden añadir productos al carrito, modificar la cantidad, eliminar artículos y proceder al pago. La aplicación proporciona una experiencia completa de compra en línea, desde la exploración de productos hasta la gestión del carrito y la finalización de la compra, todo con un diseño moderno y responsivo gracias a TailwindCSS.",
    technologies: ["React", "TailwindCSS"],
    thumbnail: eComerce,
    previewLink: "e-commerce-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/E-commerce",
    videoUrl: "/videos/E-commerce.mp4",
    screenshots: [
      "/images/screenshots/E-commerce/screenshot1.png",
      "/images/screenshots/E-commerce/screenshot2.png",
      "/images/screenshots/E-commerce/screenshot3.png",
    ],
    category: "Frontend",
    featured: false,
  }
];

export default projects;