import { useEffect, useState } from "react";
import { GitHubIcon, LaptopIcon } from "../../../assets/icons";
import PropTypes from "prop-types";

export const ProjectDetailsPopUp = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = project.screenshots || [project.thumbnail];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <div className="fixed z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
      <div className="relative bg-card-background rounded-lg shadow-xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto ">
        <button
          className="absolute top-3 right-3 text-white bg-card-background rounded-full w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/80 transition-colors"
          onClick={onClose}
        >
          X
        </button>

        <div className="w-full">
          <img
            src={images[currentImage]}
            alt={`${project.title} screenshot`}
            className="w-full h-64 sm:h-80 object-cover rounded-t-lg"
          />
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentImage === index ? "bg-button" : "bg-gray-600"
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="p-6">
            <div className="mt-4">
              <ul className="list-disc list-inside mt-2  gap-4 flex flex-wrap mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded text-black text-sm font-medium"
                    style={{
                      backgroundColor:
                        index % 3 === 0
                          ? "#4FD1C5"
                          : index % 3 === 1
                          ? "#68D391"
                          : "#9F7AEA",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </ul>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-title mb-2">
                  About this project
                </h3>
                <p className="text-paragraph">{project.longDescription}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-title mb-2">
                  Desafíos y Soluciones
                </h3>
                <ul className="space-y-3">
                  {project.challenges?.map((item, index) => (
                    <li key={index} className="bg-black/10 p-3 rounded">
                      <p className="font-medium text-title">
                        Desafío: {item.challenge}
                      </p>
                      <p className="text-paragraph mt-1">
                        Solución: {item.solution}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-6">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
              >
                <GitHubIcon className="h-6 w-6" />
                View Code
              </a>
              <a
                href={project.previewLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
              >
                <LaptopIcon className="h-6 w-6" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectDetailsPopUp.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    thumbnail: PropTypes.any.isRequired,
    codeLink: PropTypes.string.isRequired,
    previewLink: PropTypes.string.isRequired,
    screenshots: PropTypes.arrayOf(PropTypes.string),
    challenges: PropTypes.arrayOf(
      PropTypes.shape({
        challenge: PropTypes.string.isRequired,
        solution: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
