import React from "react";
import Link from "next/link";
import { TbBrandMongodb, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import "animate.css";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="m-auto py-10 sm:py-20 md:py-28 max-w-6xl px-4 sm:px-6 md:px-8 animate__animated animate__fadeInDown text-stone-800 dark:text-stone-200 overflow-hidden">
        <h1 className="font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          <Link
            href="https://udean777.github.io/portfoliolama/"
            target="__blank"
          >
            <div className="block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-md backdrop-blur-sm bg-zinc-200/30 ">
              <img
                loading="lazy"
                className="w-full rounded-sm "
                src="/project.jpeg"
                alt="Card Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">My First Portfolio</div>
                <div className="flex gap-2">
                  {" "}
                  <FaBootstrap
                    className="text-purple-600 p-1 rounded-full dark:bg-slate-50"
                    size={30}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://jeketi-web.vercel.app/" target="__blank">
            <div className="block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-md backdrop-blur-sm bg-zinc-200/30">
              <img
                loading="lazy"
                className="w-full rounded-sm "
                src="/projects2.png"
                alt="Card Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">Clone Landing Page</div>
                <div className="flex gap-2">
                  {" "}
                  <TbBrandTailwind
                    className="text-blue-500 p-1 rounded-full dark:bg-slate-50"
                    size={30}
                  />
                  <FaReact
                    className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
                    size={30}
                  />
                  <TbBrandNextjs
                    className="text-slate-800 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
                    size={30}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://udean.vercel.app/" target="__blank">
            <div className="block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-md backdrop-blur-sm bg-zinc-200/30">
              <img
                loading="lazy"
                className="w-full rounded-sm "
                src="/project3.png"
                alt="Card Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">
                  My Second Portfolio
                </div>
                <div className="flex gap-2">
                  {" "}
                  <TbBrandTailwind
                    className="text-blue-500 p-1 rounded-full dark:bg-slate-50"
                    size={30}
                  />
                  <FaReact
                    className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
                    size={30}
                  />
                  <TbBrandNextjs
                    className="text-slate-800 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
                    size={30}
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://github.com/Udean777/todo-deploy" target="__blank">
            <div className="block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-md backdrop-blur-sm bg-zinc-200/30">
              <img
                loading="lazy"
                className="w-full rounded-sm "
                src="/project4.png"
                alt="Card Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">To Do List</div>
                <div className="flex gap-2">
                  {" "}
                  <TbBrandMongodb
                    className="bg-green-600 p-1 rounded-full text-slate-50"
                    size={30}
                  />
                  <SiExpress
                    className="bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-800 p-1 rounded-full"
                    size={30}
                  />
                  <FaReact
                    className="text-blue-600 dark:bg-slate-50 p-1 rounded-full"
                    size={30}
                  />
                  <FaNodeJs
                    className="text-green-500 bg-slate-500 p-1 rounded-full"
                    size={30}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
