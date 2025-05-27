export const NavBarItem = ({ Icon, name, onClick }) => {
  return (
    <a
      className="group flex items-center p-3 lg:p-3 xl:p-4 bg-card-background rounded-lg lg:rounded-full shadow-md transition-all text-button-text cursor-pointer relative lg:shadow-custom active:translate-x-1 active:translate-y-1 lg:active:translate-x-2 lg:active:translate-y-2 active:shadow-custom-hover hover:text-orange-600"
      href={`#${name}`}
      onClick={onClick}
    >
      <Icon className="w-5 h-5 mr-2 lg:mr-0 lg:w-8 lg:h-8 xl:w-12 xl:h-12"/>
      
      <span className="text-sm lg:hidden">
        {name}
      </span>
      
      <span className="hidden lg:block lg:absolute lg:right-12 xl:right-16 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:px-2 lg:py-1 lg:text-sm xl:text-base lg:text-paragraph lg:bg-card-background lg:rounded lg:shadow-md lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:duration-200 lg:font-semibold lg:whitespace-nowrap lg:pointer-events-none">
        {name}
      </span>
    </a>
  );
};