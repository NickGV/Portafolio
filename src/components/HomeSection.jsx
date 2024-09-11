import { useState } from "react";
import profileImg from "../assets/Profile-img.jpg";
import { GitHubIcon, LinkedInIcon } from "../assets/icons";

export const HomeSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("nickgomvelez@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center px-4 lg:px-8 lg:px-16"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 w-full lg:max-w-4xl 2xl:max-w-5xl mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-title font-semibold text-title flex flex-col lg:flex-row items-center gap-4">
            <span>Mi nombre es Nicolas Gomez Velez </span>
          </h1>
          <div className="bg-green-500 text-white p-1 w-36 rounded-full shadow-lg my-2">
            <span className="font-semibold text-xs ">
              Disponible para Trabajar
            </span>
          </div>
          <p className="text-paragraph font-paragraph text-base lg:text-lg max-w-prose mb-4">
            Desarrollador Front-end freelance que lleva 1 año y medio
            aprendiendo y desarrollando aplicaciones web.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <button
              type="button"
              className="p-3 lg:p-4 w-40 lg:w-44 bg-button rounded-lg font-title text-button-text font-semibold hover:text-opacity-90 hover:bg-button-hover transition-all shadow-btn"
            >
              Descargar CV
            </button>

            <a
              href="#"
              className="relative text-link-text underline font-semibold text-lg font-paragraph"
              onClick={handleEmailCopy}
            >
              Nickgomvelez@gmail.com
              <span className="absolute text-paragraph bottom-5 right-0">
                {emailCopied && "Copiado!"}
              </span>
            </a>
          </div>
        </div>

        <div className="w-32 lg:w-full relative">
          <img
            src={profileImg}
            alt="profile-img"
            className="rounded-full shadow-custom"
          />
          <div className="absolute top-0 -right-12 lg:top-0 lg:right-0 flex flex-col items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-g%C3%B3mez-902361274/"
              target="_blank"
              className="relative group text-white hover:text-link-text hover:scale-110 transition-all p-3 lg:p-4 bg-card-background shadow-custom rounded-full mb-4"
            >
              <LinkedInIcon className={"h-6 lg:h-8 w-6 lg:w-8"} />
              <span className="absolute left-12 lg:left-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-paragraph rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold font-paragraph">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/NickGV"
              target="_blank"
              className="group text-white hover:text-link-text hover:scale-110 transition-all p-3 lg:p-4 bg-card-background shadow-custom rounded-full mb-4 lg:absolute lg:-bottom-20 lg:-right-12"
            >
              <GitHubIcon className={"h-6 lg:h-8 w-6 lg:w-8"} />
              <span className="absolute left-12 lg:left-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-paragraph rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold font-paragraph">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
