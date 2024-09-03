export const NavBarItem = ({ Icon, name }) => {
  return (
    <a className="group relative p-4 bg-card-background rounded-full shadow-custom active:translate-x-2 active:translate-y-2 active:shadow-custom-hover transition-all text-button-text  hover:text-orange-600 cursor-pointer">
      <span href="#" className="">
        <Icon className="w-10 h-10" />
      </span>
      <span className="absolute right-16 top-1/2 transform -translate-y-1/2 px-2 py-1 text-paragraph rounded opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
        {name}
      </span>
    </a>
  );
};
