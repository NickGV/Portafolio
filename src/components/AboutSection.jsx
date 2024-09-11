import profileImg from "../assets/profile-img.jpg";
export const AboutSection = () => {
  return (
    <section
      id="About"
      className="flex flex-col gap-6 lg:flex-row items-center md:max-w-4xl 2xl:max-w-5xl mx-auto px-4"
    >
      <div className="text-paragraph max-w-prose flex flex-col gap-2 text-left">
        <h1 className="text-title text-xl md:text-3xl">Un poco sobre mi:</h1>
        <p>
          Me llamo Nicolás Gómez, pero puedes llamarme Nico. Mi viaje en la
          programación comenzó hace un año y medio, cuando empecé a aprender por
          mi cuenta mediante cursos en línea. Desde entonces, he trabajado en
          una variedad de proyectos personales, desde el desarrollo de
          interfaces con HTML, CSS y JavaScript, hasta el uso de frameworks
          modernos como React y Tailwind CSS.
        </p>
        <p>
          Actualmente, sigo aprendiendo mas sobre la programación front-end con
          una creciente pasión por el backend. Estoy en mi tercer semestre de la
          carrera de Desarrollo de Software en la IU Digital de Antioquia y
          también cuento con un título técnico en Programación para Analítica de
          Datos.
        </p>
        <p>
          Mi objetivo es continuar desarrollándome como profesional y llevar
          proyectos desde el diseño hasta la implementación, combinando
          creatividad y eficiencia.
        </p>
      </div>
      <div>
        <img
          src={profileImg}
          alt="profile-img"
          className="rounded-full shadow-custom"
        />
      </div>
    </section>
  );
};
