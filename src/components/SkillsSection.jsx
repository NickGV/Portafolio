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
    { Icon: HtmlIcon, name: "HTML", color: "group-hover:text-orange-500" },
    { Icon: CssIcon, name: "CSS", color: "group-hover:text-blue-400" },
    {
      Icon: JavascriptIcon,
      name: "JavaScript",
      color: "group-hover:text-yellow-400",
    },
    { Icon: ReactIcon, name: "React", color: "group-hover:text-blue-300" },
    { Icon: GitHubIcon, name: "GitHub", color: "group-hover:text-gray-400" },
    { Icon: GitIcon, name: "Git", color: "group-hover:text-orange-400" },
  ];

  return (
    <section id="Skills" className="min-h-screen flex justify-center items-center py-20 bg-background">
      <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto px-4">
        <h1 className="text-6xl font-title font-bold mb-10 text-title">
          Mis Habilidades
        </h1>
        <div className="bg-card-background rounded-3xl p-12">
          <h2 className="text-3xl font-title font-semibold mb-8 text-paragraph">
            Frontend
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};