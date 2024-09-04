import { useState } from "react";
import profileImg from "../assets/Profile-img.jpg";
import { GitHubIcon, LinkedInIcon } from "../assets/icons";

export const AboutSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("nickgomvelez@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };
  return (
    <section
      id="About"
      className="min-h-screen flex items-center justify-center md:max-w-4xl 2xl:max-w-5xl  mx-auto"
    >
      <div className="flex justify-center items-center gap-4 w-full">
        <div>
          <h1 className="flex flex-col text-5xl font-title font-semibold text-title">
            <span> Mi nombre es</span>
            <span>Nicolas Gomez Velez</span>
          </h1>
          <p className="font-medium text-title text-2xl mb-2">
            Soy un desarrollador Frontend
          </p>
          <p className="text-paragraph font-paragraph text-lg max-w-prose mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
            ducimus eius, consequatur unde reprehenderit repellendus dolorum
            tempora perferendis corporis similique modi sed id quod. Cum libero
            voluptate corrupti cupiditate.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-4 w-44 bg-button rounded-lg font-title text-button-text font-semibold hover:text-opacity-90 hover:bg-button-hover transition-all shadow-btn"
            >
              Descargar CV
            </button>

            <a
              href="#"
              className="relative text-link-text underline font-semibold text-lg font-paragraph"
              onClick={handleEmailCopy}
            >
              Nickgomvelez@gmail.com
              <span className="absolute text-paragraph bottom-5 right-0">{emailCopied && "Copiado!"}</span>
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
              <LinkedInIcon className={"h-8 w-8"} />
              <span className="absolute left-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-paragraph rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold font-paragraph">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/NickGV"
              target="_blank"
              className="group text-white hover:text-link-text hover:scale-110 transition-all p-4 bg-card-background shadow-custom rounded-full mb-4 absolute -right-12"
            >
              <GitHubIcon className={"h-8 w-8"} />
              <span className="absolute left-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-paragraph rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold font-paragraph">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
