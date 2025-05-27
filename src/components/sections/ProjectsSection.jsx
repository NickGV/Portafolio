import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import projects from "../../data/projects";
import { ProjectCard } from "../features/projects/ProjectCard";
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  ReactIcon,
  TailwindCssIcon,
  NodejsIcon,
  ExpressJsIcon,
  MongoDBIcon,
} from "../../assets/icons";

export const ProjectsSection = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilters, setActiveFilters] = useState([]);

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
      Icon: JavaScriptIcon,
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
      Icon: MongoDBIcon,
      name: "MongoDB",
      color: "hover:text-green-500",
      activeColor: "text-green-500",
    },
    {
      Icon: ExpressJsIcon,
      name: "Express",
      color: "hover:text-gray-400",
      activeColor: "text-gray-400",
    },
    
  ];

  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredProjects(projects.filter((project) => project.featured));
    } else {
      const filtered = projects.filter(
        (project) =>
          project.featured &&
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
    <section
      id="Projects"
      className="min-h-screen flex flex-col items-center md:max-w-4xl 2xl:max-w-5xl mx-auto -mt-20 px-4"
    >
      <h2 className="text-5xl font-bold text-title mb-8">Projects</h2>

      <div className="w-full mb-8">
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
                  className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${
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
            className="block mx-auto mt-4 text-link-text hover:underline text-sm"
          >
            Mostrar todos
          </button>
        )}
      </div>

      {/* Grid de proyectos */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <div className="group bg-card-background flex items-center justify-center rounded-md shadow-custom hover:scale-105 transition-all hover:shadow-none cursor-pointer p-4">
            <Link
              to="/projects"
              className="text-title font-bold text-lg group-hover:text-link-text transition-colors"
            >
              Ver más...
            </Link>
          </div>
        </div>
      ) : (
        <div className="min-h-[200px] w-full flex items-center justify-center">
          <p className="text-title text-xl text-center">
            No se encontraron proyectos con los filtros seleccionados.
          </p>
        </div>
      )}
    </section>
  );
};
