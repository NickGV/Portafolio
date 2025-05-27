import { GitHubIcon, LaptopIcon } from "../../../assets/icons";
import { useState } from "react";
import { ProjectDetailsPopUp } from "./ProjectDetailsPopUp";
import PropTypes from "prop-types";

const labelColors = {
  primary: "#4FD1C5",
  secondary: "#68D391",
  alternative: "#9F7AEA",
};

export const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="flex flex-col bg-card-background rounded-lg shadow-lg hover:shadow-xl w-full h-full hover:translate-y-[-5px] cursor-pointer transition-all duration-300"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative overflow-hidden rounded-t-lg h-36">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-white text-sm font-medium">
                Click para ver detalles
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-grow p-4">
          <div>
            <h3 className="text-title text-lg font-bold mb-2 line-clamp-1">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.slice(0, 4).map((tecnology, index) => {
                const colorOptions = [
                  labelColors.primary,
                  labelColors.secondary,
                  labelColors.alternative,
                ];
                const color = colorOptions[index % colorOptions.length];
                return (
                  <span
                    key={index}
                    className="px-2 py-0.5 rounded-full text-black text-xs font-medium"
                    style={{ backgroundColor: color }}
                  >
                    {tecnology}
                  </span>
                );
              })}
              {project.technologies.length > 4 && (
                <span className="text-paragraph text-xs">
                  +{project.technologies.length - 4} más
                </span>
              )}
            </div>

            <p className="text-paragraph text-sm line-clamp-2 mb-3">
              {project.description}
            </p>
          </div>

          <div
            className="flex justify-between items-center mt-auto pt-2 border-t border-gray-700/30"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-link-text transition-colors flex gap-1 items-center group"
            >
              <GitHubIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs">Código</span>
            </a>
            <a
              href={project.previewLink}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-link-text transition-colors flex gap-1 items-center group"
            >
              <LaptopIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs">Demo</span>
            </a>
          </div>
        </div>
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
  }).isRequired,
};
