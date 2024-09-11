export const SkillCard = ({ Icon, name, color }) => (
  <div
    className={`group bg-gradient-to-r from-card-background to-background p-6 md:p-8 rounded-2xl shadow-custom transition-all duration-300 hover:shadow-custom-hover hover:scale-105 flex flex-col items-center ${color}`}
  >
    <Icon
      className={`group w-12 md:w-16 h-12 md:h-16 mb-4 text-title ${color}`}
    />
    <span
      className={`group font-paragraph text-paragraph text-lg md:text-xl ${color}`}
    >
      {name}
    </span>
  </div>
);
