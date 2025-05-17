import { useEffect } from "react";
import { GitHubIcon, LaptopIcon } from "../assets/icons";

export const ProjectDetailsPopUp = ({ project, onClose }) => {
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

        <div className="w-full h-64 sm:h-80 bg-gray-800 rounded-t-lg flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-xl mb-2">Project Video</p>
            <p className="text-sm opacity-70">
              Video placeholder - will display project showcase
            </p>
          </div>
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
                <p className="text-paragraph">{project.more}</p>
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
