import { useState } from "react";
import { GitHubIcon, LinkedInIcon } from "../assets/icons";

export const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("nickgomvelez@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="Contact" className="py-20 flex flex-col items-center">
      <div className="w-full max-w-lg mx-4 p-8 flex flex-col items-center gap-4 text-paragraph">
        <h2 className="text-3xl mb-4 text-title ">Contacto</h2>
        <p className="text-center mb-6">
          Estoy disponible para nuevos proyectos. Contacta conmigo por email o
          sígueme en mis redes sociales.
        </p>
        <div className="mb-4">
          <p className="cursor-pointer " onClick={handleEmailCopy}>
            {emailCopied ? (
              <span className="text-green-500">¡Copiado!</span>
            ) : (
              <span className="text-link-text underline">
                nickgomvelez@gmail.com
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/NickGV"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center text-gray-600 hover:text-white transition-colors"
          >
            <GitHubIcon className="w-8 h-8 mb-2" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/nicol%C3%A1s-g%C3%B3mez-902361274/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center text-gray-600 hover:text-white transition-colors"
          >
            <LinkedInIcon className="w-8 h-8 mb-2" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
