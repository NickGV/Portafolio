import profileImg from "../../assets/images/profile/profile_img.jpg";

export const AboutSection = () => {
  return (
    <section
      id="About"
      className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row items-center">
          <div className="text-paragraph max-w-prose flex flex-col gap-4 text-left">
            <h1 className="text-title text-xl md:text-3xl lg:text-4xl font-bold">
              Un poco sobre mí:
            </h1>
            <p className="text-base md:text-lg">
              Me llamo Nicolás Gómez, pero puedes llamarme Nico. Mi viaje en la
              programación comenzó hace dos años, cuando empecé a aprender por
              mi cuenta mediante cursos en línea. Desde entonces, he trabajado
              en una variedad de proyectos personales, desde el desarrollo de
              interfaces con HTML, CSS y JavaScript, hasta el uso de frameworks
              modernos como React y Tailwind CSS.
            </p>
            <p className="text-base md:text-lg">
              Actualmente, sigo aprendiendo más sobre la programación front-end
              con una creciente pasión por el backend. Estoy en mi tercer
              semestre de la carrera de Desarrollo de Software en la IU Digital
              de Antioquia y también cuento con un título técnico en
              Programación para Analítica de Datos.
            </p>
            <p className="text-base md:text-lg">
              Mi objetivo es continuar desarrollándome como profesional y llevar
              proyectos desde el diseño hasta la implementación, combinando
              creatividad y eficiencia.
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={profileImg}
              alt="profile-img"
              className="rounded-full shadow-custom w-40 h-40 md:w-80 md:h-80 2xl:w-96 2xl:h-96 object-cover object-top mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
