import { ProjectCard } from "../components/ProjectCard";
import projects from "../data/projects";
import { useEffect, useState } from "react";
import {
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  ReactIcon,
  TailwindCssIcon,
  NodejsIcon,
  ExpressJsIcon,
  MongoDBIcon,
} from "../assets/icons";

export const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilters, setActiveFilters] = useState([]);
  console.log(activeFilters);
  const techIcons = [
    {
      Icon: HtmlIcon,
      name: "HTML",
      color: "hover:text-orange-500",
      activeColor: "text-orange-500",
    },
    {
      Icon: CssIcon,
      name: "CSS",
      color: "hover:text-blue-400",
      activeColor: "text-blue-400",
    },
    {
      Icon: JavascriptIcon,
      name: "JavaScript",
      color: "hover:text-yellow-400",
      activeColor: "text-yellow-400",
    },
    {
      Icon: ReactIcon,
      name: "React",
      color: "hover:text-blue-300",
      activeColor: "text-blue-300",
    },
    {
      Icon: TailwindCssIcon,
      name: "TailwindCSS",
      color: "hover:text-blue-400",
      activeColor: "text-blue-400",
    },
    {
      Icon: NodejsIcon,
      name: "Node.js",
      color: "hover:text-green-500",
      activeColor: "text-green-500",
    },
    {
      Icon: ExpressJsIcon,
      name: "Express",
      color: "hover:text-gray-400",
      activeColor: "text-gray-400",
    },
    {
      Icon: MongoDBIcon,
      name: "MongoDB",
      color: "hover:text-green-500",
      activeColor: "text-green-500",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        activeFilters.every((filter) => project.technologies.includes(filter))
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilters]);

  const toggleFilter = (tech) => {
    setActiveFilters((prev) =>
      prev.includes(tech)
        ? prev.filter((item) => item !== tech)
        : [...prev, tech]
    );
  };

  return (
    <main className="relative z-10 first-line:min-h-screen bg-gradient-to-b from-background to-card-background/30">
      <section className="w-full pt-16 px-4 md:pt-18 flex justify-center mb-4">
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

      <section className="flex flex-col items-center md:max-w-4xl 2xl:max-w-5xl mx-auto px-4">
        <div className="w-full ">
          <h2 className="text-xl font-semibold text-title mb-6 text-center">
            Filter by Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {techIcons.map((tech, index) => {
              const isActive = activeFilters.includes(tech.name);
              return (
                <button
                  key={index}
                  onClick={() => toggleFilter(tech.name)}
                  className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-card-background scale-110 shadow-md"
                      : "hover:bg-card-background/50"
                  }`}
                >
                  <tech.Icon
                    className={`w-8 h-8 md:w-10 md:h-10 transition-colors ${
                      tech.color
                    } ${isActive ? tech.activeColor : "text-paragraph"}`}
                  />
                  <span
                    className={`text-xs mt-2 ${
                      isActive
                        ? tech.activeColor + " font-bold"
                        : "text-paragraph"
                    }`}
                  >
                    {tech.name}
                  </span>
                </button>
              );
            })}
          </div>
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="block mx-auto mt-4 text-link-text hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center md:max-w-4xl 2xl:max-w-5xl mx-auto px-4 ">
        {filteredProjects.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="min-h-[300px] w-full flex items-center justify-center">
            <p className="text-title text-xl text-center">
              No projects found with the selected filters.
            </p>
          </div>
        )}
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
