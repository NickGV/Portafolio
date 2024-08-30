import { AboutIcon } from "./icons/AboutIcon";
import reactIcon from "../assets/react-icon.svg";
import { ProjectsIcon } from "./icons/ProjectsIcon";
import { SkillsIcon } from "./icons/SkillsIcon";
import { ContactIcon } from "./icons/ContactIcon";
export const NavBar = () => {
  return (
    <nav className="flex flex-col fixed right-0 min-h-screen items-center justify-center mr-8">
      <div>
        <ul className="flex flex-col gap-8 ">
          <li className="group relative p-4 bg-card-background rounded-full shadow-custom hover:translate-x-2 hover:translate-y-2 hover:shadow-custom-hover transition-all text-white  hover:text-orange-600 cursor-pointer">
            <a href="#">
              <AboutIcon />
            </a>
            <span className="absolute right-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
              About
            </span>
          </li>
          <li className="group relative p-4 bg-card-background rounded-full shadow-custom hover:translate-x-2 hover:translate-y-2 hover:shadow-custom-hover transition-all text-white  hover:text-orange-600 cursor-pointer">
            <a href="#">
              <ProjectsIcon />
            </a>
            <span className="absolute right-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
              Projects
            </span>
          </li>
          <li className="group relative p-4 bg-card-background rounded-full shadow-custom hover:translate-x-2 hover:translate-y-2 hover:shadow-custom-hover transition-all text-white  hover:text-orange-600 cursor-pointer">
            <a href="#">
              <SkillsIcon />
            </a>
            <span className="absolute right-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
              Skills
            </span>
          </li>
          <li className="group relative p-4 bg-card-background rounded-full shadow-custom hover:translate-x-2 hover:translate-y-2 hover:shadow-custom-hover transition-all text-white  hover:text-orange-600 cursor-pointer">
            <a href="#">
              <ContactIcon />
            </a>
            <span className="absolute right-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
              Contact
            </span>
          </li>
        </ul>
      </div>
      {/* TODO: Create button to change the language and the theme */}
      {/* <div>
        <button
          type="button"
          className="flex items-center justify-center p-4 bg-card-background rounded-full shadow-custom hover:translate-x-2 hover:translate-y-2 hover:shadow-custom-hover transition-all w-12 h-12 absolute bottom-12 right-2"
        >
          <span className="text-white">ES</span>
        </button>
      </div> */}
    </nav>
  );
};
