import React from "react";
import NavPills from "../components/NavPills";
import {
  FaHtml5,
  FaBootstrap,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import {
  TbBrandTailwind,
  TbBrandVite,
  TbBrandNextjs,
  TbBrandMongodb,
} from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import "animate.css";

export default function Skills() {
  const tabs = [
    {
      id: "tech",
      title: "Tech",
      content: (
        <div className="flex justify-center lg:justify-start font-sans">
          <div className="justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white hover:text-orange-600 dark:hover:text-orange-600  bg-transparent dark:bg-transparent
            hover:bg-transparent  border-2 
             border-zinc-500 dark:border-white dark:hover:border-orange-600 hover:border-orange-600 transition ease-in"
            >
              <FaHtml5 className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                HTML
              </p>
            </div>

            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white  bg-transparent dark:bg-transparent dark:hover:text-blue-600 
            dark:hover:bg-transparent hover:bg-transparent hover:text-blue-600 border-2
             border-zinc-500 dark:border-white dark:hover:border-blue-600 hover:border-blue-600 transition ease-in"
            >
              <FaCss3Alt className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                CSS
              </p>
            </div>

            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white dark:hover:text-yellow-400  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-yellow-500 border-2
             border-zinc-500 dark:border-white dark:hover:border-yellow-500 hover:border-yellow-500 transition ease-in"
            >
              <FaJs className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                JavaScript
              </p>
            </div>

            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white dark:hover:text-green-600  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-green-600 border-2
             border-zinc-500 dark:border-white dark:hover:border-green-600 hover:border-green-600 transition ease-in"
            >
              <FaNodeJs className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                NodeJS
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "framework",
      title: "Framework & Library",
      content: (
        <div className="flex justify-center lg:justify-start font-sans">
          <div className="justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white dark:hover:text-purple-600  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-purple-600 border-2
             border-zinc-500 dark:border-white dark:hover:border-purple-600 hover:border-purple-600 transition ease-in"
            >
              <FaBootstrap className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                Bootstrap
              </p>
            </div>

            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white dark:hover:text-blue-600  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-blue-600 border-2
             border-zinc-500 dark:border-white dark:hover:border-blue-600 hover:border-blue-600 transition ease-in"
            >
              <TbBrandTailwind className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                Tailwind CSS
              </p>
            </div>

            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white dark:hover:text-gray-300 bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-gray-500 border-2
             border-zinc-500 dark:border-white dark:hover:border-gray-300 hover:border-gray-500 transition ease-in"
            >
              <TbBrandNextjs className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                Next JS
              </p>
            </div>

            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white dark:hover:text-blue-500  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-blue-500 border-2
             border-zinc-500 dark:border-white dark:hover:border-blue-500 hover:border-blue-500 transition ease-in"
            >
              <RiReactjsFill className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                React JS
              </p>
            </div>

            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white dark:hover:text-indigo-500  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-indigo-500 border-2
             border-zinc-500 dark:border-white dark:hover:border-indigo-500 hover:border-indigo-500 transition ease-in"
            >
              <TbBrandVite className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                Vite
              </p>
            </div>

            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
           dark:text-white dark:hover:text-green-500  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-green-500 border-2
             border-zinc-500 dark:border-white dark:hover:border-green-500 hover:border-green-500 transition ease-in"
            >
              <TbBrandMongodb className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                MongoDB
              </p>
            </div>

            <div
              className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105 
           dark:text-white dark:hover:text-pink-500  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-pink-500 border-2
             border-zinc-500 dark:border-white dark:hover:border-pink-500 hover:border-pink-500 transition ease-in"
            >
              <SiExpress className="m-auto w-auto py-5" size={150} />
              <p className="flex justify-center pb-2 font-sans font-bold">
                Express Js
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="dark:text-white">
        <div className="animate__animated animate__fadeInDown">
          <NavPills tabs={tabs} />
        </div>
      </div>
    </main>
  );
}
