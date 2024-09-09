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
    <section id="Contact" className="py-20 bg-background flex flex-col items-center">
      <div className="bg-card-background w-full max-w-lg lg:max-w-4xl mx-4 rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-title font-title text-3xl lg:text-4xl mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-paragraph font-paragraph mb-8">
            Estoy emocionado de colaborar en nuevos proyectos. No dude en
            comunicarse conmigo. Envíeme un correo electrónico y analicemos cómo
            puedo ayudarle a llevar sus ideas a la vida.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="group flex flex-col items-center mb-8">
            <p
              className="text-link-text font-paragraph cursor-pointer relative"
              onClick={handleEmailCopy}
            >
              {emailCopied ? (
                <span className="absolute -top-6 left-0 text-black font-bold text-sm bg-slate-400 rounded-full p-1 opacity-100 transition-opacity">
                  Copiado!
                </span>
              ) : (
                "nickgomvelez@gmail.com"
              )}
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/NickGV"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-title hover:text-link-text transition-colors"
            >
              <GitHubIcon className="w-10 h-10 mb-2" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-g%C3%B3mez-902361274/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-title hover:text-link-text transition-colors"
            >
              <LinkedInIcon className="w-10 h-10 mb-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
