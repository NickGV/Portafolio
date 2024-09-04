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
    <section className="flex justify-center items-center py-20 bg-background">
      <div className="bg-card-background w-1/2 rounded-3xl p-12 flex gap-4 items-center">
        <div>
          <h2 className="text-title font-title text-4xl mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-paragraph font-paragraph mb-8">
            Estoy emocionado de colaborar en nuevos proyectos. No dude en
            comunicarse conmigo envíeme el correo electrónico a continuación y
            analicemos cómo puedo ayudarle a llevar su ideas a la vida.
          </p>
        </div>
        <div>
          <div className="group flex flex-col items-center mb-8">
            <span className="text-black font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-slate-400 rounded-full">
              {emailCopied ? "Copiado!" : "Email"}
            </span>
            <p
              className="group text-link-text font-paragraph cursor-pointer"
              onClick={handleEmailCopy}
            >
              nickgomvelez@gmail.com
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://github.com/NickGV"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-title hover:text-link-text transition-colors mr-4"
            >
              <GitHubIcon className={"w-10 h-10"} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-g%C3%B3mez-902361274/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-title hover:text-link-text transition-colors mr-4"
            >
              <LinkedInIcon className={"w-10 h-10"} />
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
