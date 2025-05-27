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
  ExpressJsIcon,
  MongoDBIcon,
  PostgreSQLIcon,
} from "../assets/icons";
import { SkillCard } from "./SkillCard";

export const SkillsSection = () => {
  const frontSkills = [
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
    {
      Icon: TailwindCssIcon,
      name: "Tailwind CSS",
      color: "group-hover:text-blue-400",
    },
  ];
  const backSkills = [
    { Icon: NodejsIcon, name: "Node.js", color: "group-hover:text-green-500" },
    {
      Icon: ExpressJsIcon,
      name: "Express",
      color: "group-hover:text-gray-400",
    },
    { Icon: SQLIcon, name: "SQL", color: "group-hover:text-orange-400" },
    {
      Icon: PostgreSQLIcon,
      name: "PostgreSQL",
      color: "group-hover:text-blue-400",
    },
    {
      Icon: MongoDBIcon,
      name: "MongoDB",
      color: "group-hover:text-green-500",
    },
  ];

  return (
    <section
      id="Skills"
      className="min-h-screen w-full px-4 py-6 sm:py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold mb-4 sm:mb-6 md:mb-10 text-title">
          Mis Habilidades
        </h1>
        <div className="bg-card-background rounded-3xl p-4 sm:p-5 md:p-8 lg:p-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-title font-semibold mb-4 sm:mb-6 md:mb-8 text-paragraph">
            Frontend
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-10">
            {frontSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
        <div className="bg-card-background rounded-3xl p-4 sm:p-5 md:p-8 lg:p-12 mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-title font-semibold mt-4 sm:mt-6 md:mt-10 mb-4 sm:mb-6 md:mb-8 text-paragraph">
            Backend
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-10">
            {backSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
