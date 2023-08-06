import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "./ProjectCard";
import { TbBrandMongodb, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import "animate.css";

const projects = [
  {
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

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="m-auto py-5 sm:py-10 max-w-6xl px-4 sm:px-6 md:px-8 animate__animated animate__fadeInDown text-stone-800 dark:text-stone-200 overflow-hidden">
        <h1 className="font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
