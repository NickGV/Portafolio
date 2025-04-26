import { ProjectCard } from "../components/ProjectCard";
import projects from "../data/projects";
import { useEffect } from "react";

export const ProjectsPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative z-10 first-line:min-h-screen bg-gradient-to-b from-background to-card-background/30">
      <section className="w-full py-20 px-4 md:py-28  flex justify-center">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <h1 className="text-4xl md:text-2xl lg:text-3xl font-bold text-title text-center mb-6">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-link-text mb-8"></div>
          <p className="text-sm md:text-xl text-paragraph max-w-2xl text-center mx-auto">
            Explore my portfolio of web applications and projects, showcasing my
            skills in frontend and backend development.
          </p>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center md:max-w-4xl 2xl:max-w-5xl mx-auto px-4 py-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="w-full py-16 px-4 flex justify-center bg-card-background/10">
        <div className="max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-title mb-6">
            Interested in working together?
          </h2>
          <p className="text-paragraph mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <a
            href="#Contact"
            className="inline-block px-8 py-3 bg-link-text text-white font-medium rounded-md hover:bg-link-text/80 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
};
