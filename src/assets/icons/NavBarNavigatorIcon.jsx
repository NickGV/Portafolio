export const NavBarNavigatorIcon = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-directions ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21v-4" fill="none" />
      <path d="M12 13v-4" fill="none" />
      <path d="M12 5v-2" fill="none" />
      <path d="M10 21h4" fill="none" />
      <path d="M8 5v4h11l2 -2l-2 -2z" fill="none" />
      <path d="M14 13v4h-8l-2 -2l2 -2z" fill="none" />
    </svg>
  );
};
