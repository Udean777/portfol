const { FaBootstrap, FaReact, FaNodeJs } = require("react-icons/fa");
const { SiExpress } = require("react-icons/si");
const {
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandMongodb,
} = require("react-icons/tb");

const projects = [
  {
    id: 1,
    title: "My First Portfolio",
    imageSrc: "/project.jpeg",
    href: "https://udean777.github.io/portfoliolama/",
    icon: [
      <FaBootstrap
        key="1"
        className="text-purple-600 p-1 rounded-full dark:bg-slate-50"
        size={30}
      />,
    ],
  },
  {
    id: 2,
    title: "Clone Landing Page",
    imageSrc: "/projects2.png",
    href: "https://jeketi-web.vercel.app/",
    icon: [
      <TbBrandTailwind
        key="1"
        className="text-blue-500 p-1 rounded-full dark:bg-slate-50"
        size={30}
      />,
      <FaReact
        key="2"
        className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
        size={30}
      />,
      <TbBrandNextjs
        key="3"
        className="text-slate-800 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
        size={30}
      />,
    ],
  },
  {
    id: 3,
    title: "My Second Portfolio",
    imageSrc: "/project3.png",
    href: "https://udean.vercel.app/",
    icon: [
      <TbBrandTailwind
        key="1"
        className="text-blue-500 p-1 rounded-full dark:bg-slate-50"
        size={30}
      />,
      <FaReact
        key="2"
        className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
        size={30}
      />,
      <TbBrandNextjs
        key="3"
        className="text-slate-800 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
        size={30}
      />,
    ],
  },
  {
    id: 4,
    title: "To Do List",
    imageSrc: "/unfinished.png",
    href: "https://github.com/Udean777/todo-deploy",
    icon: [
      <TbBrandMongodb
        key="1"
        className="bg-green-600 p-1 rounded-full text-slate-50"
        size={30}
      />,
      <SiExpress
        key="2"
        className="bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
        size={30}
      />,
      <FaReact
        key="3"
        className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
        size={30}
      />,
      <FaNodeJs
        key="4"
        className="text-green-500 bg-slate-500 p-1 rounded-full"
        size={30}
      />,
    ],
  },
  {
    id: 5,
    title: "CRUD w/NextJS",
    imageSrc: "/unfinished.png",
    href: "https://github.com/Udean777/next-crud",
    icon: [
      <TbBrandMongodb
        key="1"
        className="bg-green-600 p-1 rounded-full text-slate-50"
        size={30}
      />,
      <TbBrandNextjs
        key="2"
        className="bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
        size={30}
      />,
      <FaReact
        key="3"
        className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
        size={30}
      />,
    ],
  },
];

export default projects;
