import { GitHubIcon, LaptopIcon } from "../../../assets/icons";
import { useState } from "react";
import { ProjectDetailsPopUp } from "./ProjectDetailsPopUp";
import PropTypes from "prop-types";

export const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="group relative bg-gradient-to-br from-card-background to-card-background/80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-700/30 hover:border-blue-400/40"
        onClick={() => setShowDetails(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <div className="relative h-48 md:h-52 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-[#e94b75]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">
              {project.title}
            </h3>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <p className="text-white/90 text-sm font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                Click para ver detalles
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((technology, index) => {
              const gradients = [
                "bg-gradient-to-r from-cyan-400 to-blue-500",
                "bg-gradient-to-r from-green-400 to-emerald-500", 
                "bg-gradient-to-r from-purple-400 to-pink-500",
                "bg-gradient-to-r from-yellow-400 to-orange-500"
              ];
              const gradient = gradients[index % gradients.length];
              return (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg ${gradient} transform hover:scale-105 transition-transform duration-200`}
                >
                  {technology}
                </span>
              );
            })}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 rounded-full bg-gray-600/50 text-gray-300 text-xs font-medium border border-gray-500/30">
                +{project.technologies.length - 4} más
              </span>
            )}
          </div>

          <p className="text-paragraph text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div
            className="flex justify-between items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn backdrop-blur-sm border border-gray-600/30"
            >
              <GitHubIcon className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-medium">Código</span>
            </a>
            
            <a
              href={project.previewLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-button to-[#e94b75] hover:from-orange-300 hover:to-[#e9517a] text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
            >
              <LaptopIcon className="h-5 w-5 group-hover/btn:rotate-12 group-hover/btn:scale-110  transition-transform duration-300" />
              <span className="text-sm font-medium">Demo</span>
            </a>
          </div>
        </div>
        
        {project.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold shadow-lg">
            ⭐ Featured
          </div>
        )}
      </div>

      {showDetails && (
        <ProjectDetailsPopUp
          project={project}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    thumbnail: PropTypes.any.isRequired,
    codeLink: PropTypes.string.isRequired,
    previewLink: PropTypes.string.isRequired,
    featured: PropTypes.bool,
  }).isRequired,
};
