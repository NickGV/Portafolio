import musicXplore from "../assets/images/projects/musicXplore.webp";
import fyloLandingPage from "../assets/images/projects/fyloLandingPage.webp";
import blogi from "../assets/images/projects/blogi.webp";
import eComerce from "../assets/images/projects/e-commerce.webp";
import contactEase from "../assets/images/projects/contactEase.png";
import bookNest from "../assets/images/projects/bookNest.png";

const projects = [
  {
    id: 1,
    title: "ContactEase",
    description:
      "Aplicación web para gestión de contactos con chat en tiempo real y comunicación instantánea y busquedas integrada.",
    longDescription: "ContactEase es una aplicación web completa que facilita la gestión de contactos personales con funcionalidades avanzadas de comunicación. Permite a los usuarios agregar, editar y eliminar contactos, marcarlos como favoritos, y buscarlos por nombre, correo o teléfono. La aplicación incluye un sistema de chat en tiempo real que mantiene conversaciones persistentes entre usuarios, notificaciones de mensajes nuevos, y la posibilidad de eliminar chats individuales. Todo esto se complementa con un sistema de usuarios robusto que incluye registro, autenticación y perfiles personalizables, garantizando la seguridad mediante tokens JWT.",
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    thumbnail: contactEase,
    previewLink: "https://contactease-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/ConctactEase",
    videoUrl: "https://example.com/path-to-your-video.mp4",
    screenshots: [
    "/path/to/screenshot1.png",
    "/path/to/screenshot2.png",
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
    title: "BookNest",
    description:
      "Aplicación full-stack para gestionar una biblioteca personal, con autenticación JWT y diseño responsivo.",
    longDescription: "BookNest es una aplicación full-stack diseñada para administrar tu biblioteca personal de forma sencilla y eficiente. Permite a los usuarios registrados añadir, editar, eliminar y visualizar información detallada de sus libros favoritos. Con una interfaz moderna y responsive, BookNest ofrece una experiencia de usuario fluida tanto en dispositivos móviles como de escritorio. La aplicación implementa autenticación mediante JWT para garantizar la seguridad de los datos de cada usuario.",
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    thumbnail: bookNest,
    previewLink: "https://booknest-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/BookNest",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "Blogi",
    description:
      "Aplicación de blogging React + Express que permite crear, leer, actualizar y eliminar posts, con soporte para Markdown y diseño responsivo.",
    longDescription: "Blogi es una aplicación de blogging construida con React que facilita la creación, edición y gestión de publicaciones. Ofrece una interfaz amigable donde los usuarios pueden escribir posts en Markdown, visualizarlos, y eliminarlos fácilmente. Con un diseño responsivo, Blogi se adapta a diferentes dispositivos, garantizando una buena experiencia tanto en desktop como en móviles. La aplicación está configurada para una futura integración de autenticación de usuarios y uso de bases de datos.",
    technologies: ["React", "TailwindCSS"],
    thumbnail: blogi,
    previewLink: "https://blogi-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/blog-react",
    category: "Frontend",
    featured: true,
  },
  {
    id: 4,
    title: "MusicXplore",
    description:
      "Aplicación web para explorar, reproducir, y gestionar canciones y playlists, con integración de la API de Spotify.",
    longDescription: "MusiXplore es una aplicación web diseñada para amantes de la música que buscan una forma sencilla de explorar, reproducir y organizar sus canciones favoritas. La aplicación permite buscar canciones y playlists utilizando la API de Spotify, ofreciendo resultados precisos y actualizados. Además, los usuarios pueden crear y gestionar playlists personalizadas, añadir canciones a sus favoritos y controlar la reproducción con facilidad a través de un reproductor integrado. Todo se gestiona localmente en la web, garantizando una experiencia fluida y accesible desde cualquier dispositivo.",
    technologies: ["React", "CSS"],
    thumbnail: musicXplore,
    previewLink: "https://musicxplore.netlify.app/",
    codeLink: "https://github.com/NickGV/MusicXplore",
    category: "Frontend",
    featured: true,
  },

  {
    id: 5,
    title: "Fylo landing page with translation",
    description:
      "Página de aterrizaje en React con traducción dinámica entre inglés y español, creada como un desafío de Frontendmentor.io.",
    longDescription: "Fylo Landing Page es una página de aterrizaje desarrollada en React, que ofrece traducción dinámica entre inglés y español. Este proyecto se realizó como parte de un desafío en Frontendmentor.io, utilizando una plantilla que fue adaptada y mejorada con componentes React reutilizables. La aplicación presenta un diseño responsivo, asegurando una experiencia de usuario consistente en diversos dispositivos y tamaños de pantalla. Utiliza la React Context API para manejar el estado del idioma y archivos JSON para gestionar y mantener los datos de traducción de manera eficiente.",
    technologies: ["React", "CSS"],
    thumbnail: fyloLandingPage,
    previewLink: "https://landing-page-with-translation-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/Fylo-Landing-Page-with-Translation",
    category: "Frontend",
    featured: true,
  },
];

export default projects;

// {
//   id: 4,
//   title: "E-Commerce",
//   description:
//     "Aplicación de comercio electrónico desarrollada en React y TailwindCSS, con gestión de productos, categorías, carrito de compras y opciones de pago.",
//   longDescription: "E-commerce Project es una aplicación de comercio electrónico diseñada para practicar React y TailwindCSS. Ofrece una página de inicio con productos destacados, categorías y los artículos más valorados. Los usuarios pueden añadir productos al carrito, modificar la cantidad, eliminar artículos y proceder al pago. La aplicación proporciona una experiencia completa de compra en línea, desde la exploración de productos hasta la gestión del carrito y la finalización de la compra, todo con un diseño moderno y responsivo gracias a TailwindCSS.",
//   technologies: ["React", "TailwindCSS"],
//   thumbnail: eComerce,
//   previewLink: "e-commerce-nickgv.netlify.app/",
//   codeLink: "https://github.com/NickGV/E-commerce",
// },
