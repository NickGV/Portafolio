import { useState } from "react";
import {
  AboutIcon,
  ProjectsIcon,
  SkillsIcon,
  HomeIcon,
  ContactIcon,
  NavBarNavigatorIcon,
} from "../../assets/icons";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const navItems = [
    { Icon: HomeIcon, name: "Home" },
    { Icon: ProjectsIcon, name: "Projects" },
    { Icon: SkillsIcon, name: "Skills" },
    { Icon: AboutIcon, name: "About" },
    { Icon: ContactIcon, name: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>

      <button
        onClick={toggleMenu}
        className="fixed bottom-6 right-6 bg-card-background text-white p-3 rounded-full shadow-md shadow-gray-500 transition-all hover:text-button lg:hidden z-50"
      >
        <NavBarNavigatorIcon className={`w-6 h-6 transition-colors ${menuOpen ? 'text-button' : ''}`} />
      </button>

      <div
        className={`fixed bottom-20 right-4 bg-card-background p-4 rounded-lg shadow-lg transition-all duration-300 lg:hidden z-40 ${
          menuOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavBarItem 
              key={item.name} 
              Icon={item.Icon} 
              name={item.name}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </ul>
      </div>

      <div className="fixed right-2 md:right-4 lg:right-6 xl:right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex z-40">
        <ul className="flex flex-col gap-3 lg:gap-4 xl:gap-6">
          {navItems.map((item) => (
            <NavBarItem key={item.name} Icon={item.Icon} name={item.name} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
