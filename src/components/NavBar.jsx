import {
  AboutIcon,
  ProjectsIcon,
  SkillsIcon,
  ContactIcon,
} from "../assets/icons";
import { NavBarItem } from "./NavBarItem";
export const NavBar = () => {
  const navItems = [
    { Icon: AboutIcon, name: "About" },
    { Icon: ProjectsIcon, name: "Projects" },
    { Icon: SkillsIcon, name: "Skills" },
    { Icon: ContactIcon, name: "Contact" },
  ];
  return (
    <nav className="flex flex-col fixed right-0 min-h-screen items-center justify-center mr-8">
      <div className="font-paragraph">
        <ul className="flex flex-col gap-8 ">
          {navItems.map((item) => (
            <NavBarItem key={item.name} Icon={item.Icon} name={item.name} />
          ))}
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
