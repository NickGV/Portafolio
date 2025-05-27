import { SkillCard } from "../features/skills/SkillCard";
import { frontSkills, backSkills, toolsSkills } from "../../data/skills";

export const SkillsSection = () => {
  return (
    <section
      id="Skills"
      className="min-h-screen w-full px-4 py-6 sm:py-8 md:py-12 lg:py-20"
    >
      <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold mb-4 sm:mb-6 md:mb-10 text-title">
          Mis Habilidades
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 sm:mb-8">
          <div className="bg-card-background rounded-3xl p-4 sm:p-5 md:p-8">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-title font-semibold text-paragraph">
                Frontend
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {frontSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} learning={skill.learning} />
              ))}
            </div>
          </div>

          <div className="bg-card-background rounded-3xl p-4 sm:p-5 md:p-8">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-title font-semibold text-paragraph">
                Backend
              </h2>
              <span className="text-xs sm:text-sm px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                En aprendizaje
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {backSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card-background rounded-3xl p-4 sm:p-5 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-title font-semibold mb-4 sm:mb-6 text-paragraph">
            Herramientas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            {toolsSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
