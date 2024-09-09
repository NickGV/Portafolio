import projects from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen flex flex-col items-center md:max-w-4xl 2xl:max-w-5xl mx-auto px-4"
    >
      <h2 className="text-5xl font-bold text-title mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <div className="group bg-card-background flex items-center justify-center rounded-md shadow-custom hover:scale-105 transition-all hover:shadow-none cursor-pointer p-4">
          <a
            href="#"
            className="text-title font-bold text-lg group-hover:text-link-text transition-colors"
          >
            Ver más...
          </a>
        </div>
      </div>
    </section>
  );
};
