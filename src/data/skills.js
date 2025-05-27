import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  ReactIcon,
  NodejsIcon,
  GitHubIcon,
  GitIcon,
  TailwindCssIcon,
  ExpressJsIcon,
  SQLIcon,
  PostgreSQLIcon,
  MongoDBIcon,
} from '../assets/icons';



export const frontSkills = [
  { Icon: HtmlIcon, name: "HTML", color: "group-hover:text-orange-500" },
  { Icon: CssIcon, name: "CSS", color: "group-hover:text-blue-400" },
  {
    Icon: JavaScriptIcon,
    name: "JavaScript",
    color: "group-hover:text-yellow-400",
  },
  { Icon: ReactIcon, name: "React", color: "group-hover:text-blue-300" },
  {
    Icon: TailwindCssIcon,
    name: "Tailwind CSS",
    color: "group-hover:text-blue-400",
  },
];
export const backSkills = [
  { Icon: NodejsIcon, name: "Node.js", color: "group-hover:text-green-500" },
  {
    Icon: ExpressJsIcon,
    name: "Express",
    color: "group-hover:text-gray-400",
  },
  { Icon: SQLIcon, name: "SQL", color: "group-hover:text-orange-400" },
  {
    Icon: PostgreSQLIcon,
    name: "PostgreSQL",
    color: "group-hover:text-blue-400",
  },
  {
    Icon: MongoDBIcon,
    name: "MongoDB",
    color: "group-hover:text-green-500",
  },
];

export const toolsSkills = [
  { Icon: GitIcon, name: "Git", color: "group-hover:text-orange-500" },
  { Icon: GitHubIcon, name: "GitHub", color: "group-hover:text-gray-500" },
];