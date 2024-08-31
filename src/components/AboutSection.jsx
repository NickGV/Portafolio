import profileImg from "../assets/Profile-img.jpg";
import { GitHubIcon } from "../assets/icons/GitHubIcon";
import { LinkedinIcon } from "../assets/icons/LinkedinIcon";

export const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center max-w-5xl mx-auto">
      <div className="flex justify-center items-center gap-4">
        <div>
          <h1 className="flex flex-col text-5xl font-title font-semibold text-title mb-4">
            <span> Mi nombre es</span>
            <span>Nicolas Gomez Velez</span>
          </h1>
          <p className="text-paragraph text-lg max-w-prose mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
            ducimus eius, consequatur unde reprehenderit repellendus dolorum
            tempora perferendis corporis similique modi sed id quod. Cum libero
            voluptate corrupti cupiditate.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-4 w-44 bg-button rounded-lg font-title text-title font-semibold hover:text-opacity-80 transition-all shadow-btn "
            >
              Descargar CV
            </button>

            <a
              href="#"
              className="text-link-text underline font-semibold text-lg"
            >
              Nickgomvelez@gmail.com
            </a>
          </div>
        </div>
        <div className="w-profile-img relative">
          <img
            src={profileImg}
            alt="profile-img"
            className="rounded-full shadow-custom"
          />
          <div className="absolute top-0 right-0">
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-g%C3%B3mez-902361274/"
              target="_blank"
              className="relative group text-white hover:text-link-text  hover:scale-110 transition-all p-4 bg-card-background shadow-custom rounded-full mb-4"
            >
              <LinkedinIcon />
              <span className="absolute left-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/NickGV"
              target="_blank"
              className="group text-white hover:text-link-text hover:scale-110 transition-all p-4 bg-card-background shadow-custom rounded-full mb-4 absolute -right-12"
            >
              <GitHubIcon />
              <span className="absolute left-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
