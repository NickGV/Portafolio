export const NavBarItem = ({ Icon, name }) => {
  return (
    <li className="p-4 bg-card-background rounded-full shadow-custom hover:translate-x-2 hover:translate-y-2 hover:shadow-custom-hover  transition-all">
      <a href="#" className="w-8 h-8 hover:text-blue-500">
        <Icon />
      </a>
    </li>
  );
};
