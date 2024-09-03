import musicXplore from "../assets/musicXplore.webp";
import fyloLandingPage from "../assets/Fylo-landing-page.webp";
import contacEasy from "../assets/contactEasy.webp";
import blogi from "../assets/blogi.webp";
import eComerce from "../assets/e-commerce.webp";

const projects = [
  {
    id: 1,
    title: "MusicXplore",
    description:
      "Aplicación web para explorar, reproducir, y gestionar canciones y playlists, con integración de la API de Spotify.",
    more: "MusiXplore es una aplicación web diseñada para amantes de la música que buscan una forma sencilla de explorar, reproducir y organizar sus canciones favoritas. La aplicación permite buscar canciones y playlists utilizando la API de Spotify, ofreciendo resultados precisos y actualizados. Además, los usuarios pueden crear y gestionar playlists personalizadas, añadir canciones a sus favoritos y controlar la reproducción con facilidad a través de un reproductor integrado. Todo se gestiona localmente en la web, garantizando una experiencia fluida y accesible desde cualquier dispositivo.",
    technologies: ["React", "CSS"],
    image: musicXplore,
    previewLink: "https://musicxplore.netlify.app/",
    codeLink: "https://github.com/NickGV/MusicXplore",
  },
  {
    id: 2,
    title: "ContactEasy",
    description:
      " Web app para gestionar contactos con funciones completas de CRUD y opciones para marcar favoritos y búsqueda integrada.",
    more: "ContactEasy es una aplicación web diseñada para ayudar a los usuarios a gestionar sus contactos de forma sencilla y eficiente. La aplicación ofrece funciones completas de CRUD (Crear, Leer, Actualizar y Eliminar) para añadir, editar y eliminar contactos, así como opciones para marcar contactos como favoritos y buscar contactos por nombre. Todo se gestiona localmente en la web, garantizando una experiencia fluida y accesible desde cualquier dispositivo utiliza tambien la biblioteca Sonner para notificacion y los iconos de FontAwesome.",
    technologies: ["React", "TailwindCSS"],
    image: contacEasy,
    previewLink: "https://contactease-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/ConctactEasy",
  },
  {
    id: 3,
    title: "Blogi",
    description:
      "Aplicación de blogging sencilla en React que permite crear, leer, actualizar y eliminar posts, con soporte para Markdown y diseño responsivo.",
    more: "Blogi es una aplicación de blogging construida con React que facilita la creación, edición y gestión de publicaciones. Ofrece una interfaz amigable donde los usuarios pueden escribir posts en Markdown, visualizarlos, y eliminarlos fácilmente. Con un diseño responsivo, Blogi se adapta a diferentes dispositivos, garantizando una buena experiencia tanto en desktop como en móviles. La aplicación está configurada para una futura integración de autenticación de usuarios y uso de bases de datos.",
    technologies: ["React", "TailwindCSS"],
    image: blogi,
    previewLink: "https://blogi-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/blog-react",
  },
  {
    id: 4,
    title: "E-Commerce",
    description:
      "Aplicación de comercio electrónico desarrollada en React y TailwindCSS, con gestión de productos, categorías, carrito de compras y opciones de pago.",
    more: "E-commerce Project es una aplicación de comercio electrónico diseñada para practicar React y TailwindCSS. Ofrece una página de inicio con productos destacados, categorías y los artículos más valorados. Los usuarios pueden añadir productos al carrito, modificar la cantidad, eliminar artículos y proceder al pago. La aplicación proporciona una experiencia completa de compra en línea, desde la exploración de productos hasta la gestión del carrito y la finalización de la compra, todo con un diseño moderno y responsivo gracias a TailwindCSS.",
    technologies: ["React", "TailwindCSS"],
    image: eComerce,
    previewLink: "e-commerce-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/E-commerce",
  },
  {
    id: 5,
    title: "Fylo landing page with translation",
    description:
      "Página de aterrizaje en React con traducción dinámica entre inglés y español, creada como un desafío de Frontendmentor.io.",
    more: "Fylo Landing Page es una página de aterrizaje desarrollada en React, que ofrece traducción dinámica entre inglés y español. Este proyecto se realizó como parte de un desafío en Frontendmentor.io, utilizando una plantilla que fue adaptada y mejorada con componentes React reutilizables. La aplicación presenta un diseño responsivo, asegurando una experiencia de usuario consistente en diversos dispositivos y tamaños de pantalla. Utiliza la React Context API para manejar el estado del idioma y archivos JSON para gestionar y mantener los datos de traducción de manera eficiente.",
    technologies: ["React", "CSS"],
    image: fyloLandingPage,
    previewLink: "https://landing-page-with-translation-nickgv.netlify.app/",
    codeLink: "https://github.com/NickGV/Fylo-Landing-Page-with-Translation",
  },
];

export default projects;
