export const SkillCard = ({ Icon, name, color }) => (
  <div
    className={`group bg-gradient-to-r from-card-background to-background p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl shadow-custom transition-all duration-300 hover:shadow-custom-hover hover:scale-105 flex flex-col items-center ${color}`}
  >
    <Icon
      className={`group w-6 h-6 sm:w-10 md:w-12 lg:w-16  sm:h-10 md:h-12 lg:h-16 mb-2 sm:mb-3 md:mb-4 text-title ${color}`}
    />
    <span
      className={`group font-paragraph text-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-center ${color}`}
    >
      {name}
    </span>
  </div>
);
