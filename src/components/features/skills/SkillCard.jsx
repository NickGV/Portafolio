export const SkillCard = ({ Icon, name, color, learning }) => (
  <div
    className={`group bg-gradient-to-r from-card-background to-background p-3 sm:p-4 rounded-xl shadow-custom transition-all duration-300 hover:shadow-custom-hover hover:scale-105 flex flex-col items-center ${color} relative`}
  >
    {learning && (
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"></span>
    )}
    <Icon
      className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2 text-title transition-colors ${color}`}
    />
    <span
      className={`font-paragraph text-paragraph text-xs sm:text-sm text-center leading-tight transition-colors ${color}`}
    >
      {name}
    </span>
  </div>
);