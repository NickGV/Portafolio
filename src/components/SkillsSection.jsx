import {
  GitHubIcon,
  GitIcon,
  CssIcon,
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
} from "../assets/icons";
import { SkillCard } from "./SkillCard";

export const SkillsSection = () => {
  const skills = [
    { Icon: HtmlIcon, name: "HTML", color: "hover:text-orange-500" },
    { Icon: CssIcon, name: "CSS", color: "hover:text-blue-500" },
    {
      Icon: JavascriptIcon,
      name: "JavaScript",
      color: "hover:text-yellow-500",
    },
    { Icon: ReactIcon, name: "React", color: "hover:text-blue-400" },
    { Icon: GitHubIcon, name: "GitHub", color: "hover:text-gray-800" },
    { Icon: GitIcon, name: "Git", color: "hover:text-orange-600" },
  ];

  return (
    <section className="min-h-screen flex justify-center py-20">
      <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-title font-bold mb-10 text-title">
          Mis Habilidades
        </h1>
        <div className="bg-card-background rounded-xl shadow-lg p-10">
          <h2 className="text-4xl font-title font-bold mb-8 text-paragraph">
            Frontend
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
