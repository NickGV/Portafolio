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
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
          {techIcons.map((tech, index) => {
            const isActive = activeFilters.includes(tech.name);
            return (
              <button
                key={index}
                onClick={() => toggleFilter(tech.name)}
                className={`group flex flex-col items-center p-3 md:p-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-card-background to-card-background/80 scale-110 shadow-lg border border-blue-400/40"
                    : "hover:bg-card-background/50 hover:scale-105"
                } backdrop-blur-sm`}
              >
                <tech.Icon
                  className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${
                    tech.color
                  } ${isActive ? tech.activeColor + " drop-shadow-lg" : "text-paragraph group-hover:scale-110"}`}
                />
                <span
                  className={`text-xs mt-2 transition-all duration-300 ${
                    isActive
                      ? tech.activeColor + " font-bold"
                      : "text-paragraph group-hover:text-white"
                  }`}
                >
                  {tech.name}
                </span>
              </button>
            );
          })}
        </div>
        {activeFilters.length > 0 && (
          <div className="text-center">
            <button
              onClick={() => setActiveFilters([])}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium backdrop-blur-sm border border-gray-600/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        ) : (
        <div className="min-h-[300px] w-full flex flex-col items-center justify-center bg-card-background/30 rounded-2xl border-2 border-dashed border-gray-600/50 p-8">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.207-2.18C3.29 10.5 2 8.366 2 6c0-.993.241-1.929.668-2.754C3.9 2.031 5.683 1 8 1h8c2.317 0 4.1 1.031 5.332 2.246C21.759 4.071 22 5.007 22 6c0 2.366-1.29 4.5-3.793 6.82C16.5 14.184 14.34 15 12 15z" />
            </svg>
          </div>
          <h3 className="text-title text-xl font-bold mb-2">No hay proyectos</h3>
          <p className="text-paragraph text-center max-w-md">
            No se encontraron proyectos con los filtros seleccionados. Prueba a ajustar tus criterios de búsqueda.
          </p>
        </div>
      )}
      <div className="group relative bg-gradient-to-br from-card-background/50 to-card-background/30 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:bg-button-500/50 border-2 border-dashed border-gray-600/50 hover:orange-400/30 min-h-[300px] flex items-center justify-center w-full mt-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-button-400/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Link
              to="/projects"
              className="relative z-10 flex flex-col items-center gap-4 text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-button to-[#e94b75] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-title font-bold text-xl mb-2 group-hover:text-purple-400 transition-colors">
                  Ver más proyectos
                </h3>
                <p className="text-paragraph text-sm">
                  Explora mi portafolio completo
                </p>
              </div>
            </Link>
          </div>
    </section>
  );
};
