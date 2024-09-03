import projects from "../data/projects";
import { ProjectCard } from "./ProjectCard";
export const ProjectsSection = () => {
  return (
    <section className="min-h-screen flex md:max-w-4xl 2xl:max-w-5xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-title mb-8">Projects</h2>
        <div className="grid grid-cols-3 gap-y-8 gap-x-4 grid-rows-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <div className="group bg-card-background flex items-center justify-center rounded-md shadow-custom hover:scale-105 transition-all hover:shadow-none cursor-pointer">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-title font-bold text-2xl group-hover:text-link-text transition-colors"
            >
              Ver mas...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
