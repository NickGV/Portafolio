import { useEffect, useState } from "react";
import { GitHubIcon, LaptopIcon } from "../../../assets/icons";
import PropTypes from "prop-types";

export const ProjectDetailsPopUp = ({ project, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const hasVideo = Boolean(project.videoUrl);
  
  const mediaItems = [
    ...(hasVideo ? [{ type: "video", src: project.videoUrl }] : []),
    ...(project.screenshots || [project.thumbnail]).map(src => ({ type: "image", src }))
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        setCurrentMediaIndex(prev => Math.max(0, prev - 1));
      } else if (event.key === "ArrowRight") {
        setCurrentMediaIndex(prev => Math.min(mediaItems.length - 1, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mediaItems.length, onClose]);

  const currentMedia = mediaItems[currentMediaIndex];
  const isVideo = currentMedia?.type === "video";

  return (
    <div className="fixed z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
      <div className="relative bg-card-background rounded-lg shadow-xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/80 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-50"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Cerrar"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="w-full">
          <div 
            className="relative w-full overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1e2030 0%, #0f1118 100%)",
              boxShadow: "inset 0 0 30px rgba(0, 0, 0, 0.4)"
            }}
          >
            <div 
              className="absolute inset-0 z-0 opacity-20"
              style={{
                backgroundImage: `url(${project.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(20px)",
                transform: "scale(1.1)"
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
            
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="relative overflow-hidden">

                
                {isVideo ? (
                  <video 
                    controls 
                    className="w-full h-56 sm:h-72 md:h-80 object-contain mx-auto  rounded-lg shadow-lg"
                    poster={project.thumbnail}
                    autoPlay
                  >
                    <source src={currentMedia.src} type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                  </video>
                ) : (
                  <div className=" w-full h-56 sm:h-72 md:h-80 flex items-center justify-center rounded-lg shadow-lg">
                    <img
                      src={currentMedia.src}
                      alt={`${project.title} screenshot`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {mediaItems.length > 1 && (
            <div className="flex justify-center gap-3 py-3 bg-black/20">
              {mediaItems.map((media, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center ${
                    currentMediaIndex === index 
                      ? "bg-button shadow-lg" 
                      : "bg-gray-600 hover:bg-gray-500"
                  } rounded-full transition-all w-3 h-3`}
                  onClick={() => setCurrentMediaIndex(index)}
                  title={media.type === "video" ? "Video Demo" : `Screenshot ${index+1}`}
                >
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="mt-4">
            <ul className="list-disc list-inside mt-2 gap-4 flex flex-wrap mb-6">
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
                Sobre este proyecto
              </h3>
              <p className="text-paragraph">{project.longDescription}</p>
            </div>
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-title mb-2">
                  Desafíos y Soluciones
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((item, index) => (
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
            )}
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
            >
              <GitHubIcon className="h-6 w-6" />
              Ver Código
            </a>
            <a
              href={project.previewLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
            >
              <LaptopIcon className="h-6 w-6" />
              Demo en Vivo
            </a>
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
    videoUrl: PropTypes.string,
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
