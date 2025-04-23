import { GitHubIcon, LaptopIcon } from "../assets/icons";
import { useState } from 'react';
import { ProjectDetailsPopUp } from "./ProjectDetailsPopUp";

const labelColors = {
  primary: "#4FD1C5", // Cyan
  secondary: "#68D391", // Green
  alternative: "#9F7AEA", // Purple
};

export const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  console.log(showDetails)
  return (
    <>
      <div 
        className="flex flex-col bg-card-background rounded-md shadow-custom max-w-lg lg:w-full hover:scale-105 cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <img src={project.image} alt="" className="rounded-t-md" />
        <div className="flex flex-col h-full p-4">
          <div className="flex flex-wrap gap-2 items-center mb-2">
            {project.technologies.map((tecnology, index) => {
              const colorOptions = [
                labelColors.primary,
                labelColors.secondary,
                labelColors.alternative,
              ];
              const color = colorOptions[index % colorOptions.length]; 
              return (
                <span
                  key={index}
                  className="px-2 py-1 rounded text-black text-sm"
                  style={{ backgroundColor: color }}
                >
                  {tecnology}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-title text-lg font-bold">{project.title}</h3>
              <p className="text-paragraph">{project.description}</p>
            </div>
            <div className="flex justify-between mt-4" onClick={(e) => e.stopPropagation()}>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-link-text transition-colors flex gap-2 items-center"
              >
                <GitHubIcon className={"h-10 w-10"}/>
                código
              </a>
              <a
                href={project.previewLink}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-link-text transition-colors flex gap-2 items-center"
              >
                <LaptopIcon className={"h-10 w-10"}/>
                proyecto
              </a>
            </div>
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
