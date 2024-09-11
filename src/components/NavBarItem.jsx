export const NavBarItem = ({ Icon, name }) => {
  return (
    <a
      className="group flex items-center p-4 bg-card-background rounded-lg lg:rounded-full shadow-md transition-all text-button-text cursor-pointer group relative lg:shadow-custom active:translate-x-2 active:translate-y-2 active:shadow-custom-hover hover:text-orange-600"
      href={`#${name}`}
    >
      <Icon className="w-6 h-6 mr-2 lg:mr-0 lg:w-10 lg:h-10" />
      <span className="lg:absolute lg:right-20 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:px-2 lg:py-1 lg:text-paragraph lg:rounded lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:font-semibold">
        {name}
      </span>
    </a>
  );
};