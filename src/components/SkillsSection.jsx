import { HtmlIcon } from "../assets/icons/HtmlIcon";
import { CssIcon } from "../assets/icons/CssIcon";
import { JavascriptIcon, ReactIcon } from "../assets/icons";
export const SkillsSection = () => {
  return (
    <section className="min-h-screen flex md:max-w-4xl 2xl:max-w-5xl mx-auto">
      <div>
        <h1 className="text-4xl font-title font-bold mb-4 text-title">
          Skills
        </h1>
        <div>
          <h2 className="text-2xl font-title font-bold mb-4 text-title">
            Frontend
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            <li className="text-paragraph">
              <HtmlIcon />
            </li>
            <li className="text-paragraph">
              <CssIcon />
            </li>
            <li className="text-paragraph">
              <JavascriptIcon />
            </li>
            <li className="text-paragraph">
              <ReactIcon />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
