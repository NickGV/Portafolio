export const SkillCard = ({ Icon, name, color }) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col items-center ${color}`}
  >
    <Icon className="w-12 h-12 mb-4" />
    <span className="font-medium text-gray-800 text-lg">{name}</span>{" "}
  </div>
);
