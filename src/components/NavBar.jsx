// import {
//   AboutIcon,
//   ProjectsIcon,
//   SkillsIcon,
//   ContactIcon,
// } from "../assets/icons";
// import { NavBarItem } from "./NavBarItem";
// export const NavBar = () => {
//   const navItems = [
//     { Icon: AboutIcon, name: "About" },
//     { Icon: ProjectsIcon, name: "Projects" },
//     { Icon: SkillsIcon, name: "Skills" },
//     { Icon: ContactIcon, name: "Contact" },
//   ];
//   return (
//     <nav className="flex flex-col fixed right-0 min-h-screen items-center justify-center mr-8">
//       <div className="font-paragraph">
//         <ul className="flex flex-col gap-8 ">
//           {navItems.map((item) => (
//             <NavBarItem key={item.name} Icon={item.Icon} name={item.name} />
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

import { useState } from "react";
import {
  AboutIcon,
  ProjectsIcon,
  SkillsIcon,
  HomeIcon,
  ContactIcon,
  NavBarNavigatorIcon,
} from "../assets/icons";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú
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
        className="fixed bottom-4 right-4 bg-card-background text-white p-4 rounded-full shadow-md shadow-gray-500 transition-all hover:text-button lg:hidden z-10"
      >
        {menuOpen ? (
          <NavBarNavigatorIcon className="w-8 h-8 text-button" />
        ) : (
          <NavBarNavigatorIcon className="w-8 h-8 " />
        )}
      </button>
      <div
        className={`fixed bottom-20 right-4 bg-card-background p-6 rounded-lg shadow-lg transition-transform duration-300 lg:hidden  ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavBarItem key={item.name} Icon={item.Icon} name={item.name} />
          ))}
        </ul>
      </div>

      <div className="flex-col fixed right-0 min-h-screen items-center justify-center mr-8 hidden lg:flex">
        <div className="font-paragraph">
          <ul className="flex flex-col gap-8 ">
            {navItems.map((item) => (
              <NavBarItem key={item.name} Icon={item.Icon} name={item.name} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
