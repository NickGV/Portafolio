import profileImg from "../assets/Profile-img.jpg";
import { GitIcon } from "../assets/icons/GitIcon";
import { GitHubIcon } from "../assets/icons/GitHubIcon";
import { CssIcon } from "../assets/icons/CssIcon";
import { JavascriptIcon } from "../assets/icons/JavascriptIcon";
import { HtmlIcon } from "../assets/icons/HtmlIcon";
import { ReactIcon } from "../assets/icons/ReactIcon";
import { TailwinCssIcon } from "../assets/icons/TailwinCssIcon";

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
              className="p-4 w-44 bg-button rounded-lg shadow-sm font-title text-title font-semibold hover:bg-orange-700 transition-all"
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
        <div className="w-profile-img">
          <img
            src={profileImg}
            alt="profile-img"
            className="rounded-full shadow-custom"
          />
          {/* <div>
            <button>
              <img src={linkedInIcon} alt="linkedin" />
            </button>
            <button>
              <img src={githubIcon} alt="github" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};