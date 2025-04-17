import {
  GitHubIcon,
  GitIcon,
  CssIcon,
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
  TailwindCssIcon,
  SQLIcon,
  NodejsIcon,
  ExpressIcon,
  MongoDBIcon,
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
    { Icon: TailwindCssIcon, name: "Tailwind CSS", color: "group-hover:text-blue-400" },
    { Icon: NodejsIcon, name: "Node.js", color: "group-hover:text-green-500" },
    { Icon: SQLIcon, name: "SQL", color: "group-hover:text-orange-400" },
    { Icon: ExpressIcon, name: "Express", color: "group-hover:text-gray-400" },
    {
      Icon: MongoDBIcon,
      name: "MongoDB",
      color: "group-hover:text-green-500",
    },
  ];

  return (
    <section
      id="Skills"
      className="min-h-screen max-w-lg md:max-w-4xl 2xl:max-w-5xl mx-auto flex justify-center items-center py-10 md:py-20"
    >
      <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-title font-bold mb-6 md:mb-10 text-title">
          Mis Habilidades
        </h1>
        <div className="bg-card-background rounded-3xl p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl font-title font-semibold mb-6 md:mb-8 text-paragraph">
            Frontend
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
