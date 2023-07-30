import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="py-28 flex justify-center animate__animated animate__fadeInDown overflow-hidden"
      id="hero"
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="mb-8 md:mb-0">
          <Image
            as="image"
            src="/hero1.jpeg"
            width={300}
            height={300}
            alt="hero"
            loading="lazy"
            className="rounded-full w-64 md:w-72 lg:w-80"
          />
        </div>
        <div className="text-center lg:text-start md:ms-5 lg:ms-0 md:text-start lg:px-10 font-sans">
          <div className="text-slate-800 dark:text-slate-200">
            <h3 className="text-2xl">Hello! My name is</h3>
            <h1 className="text-4xl font-bold font-sans">
              Sajudin <span className="text-blue-500">Ma'ruf</span>
            </h1>
            <h3 className="text-lg">
              a Junior{" "}
              <span className="text-blue-500 font-bold font-mono">
                FrontEnd Developer
              </span>
            </h3>
            <div className="py-2 hover:scale-105 transition ease-in">
              <a
                href="CV.pdf"
                target="_blank"
                className="border-2 border-blue-500 text-blue-500 p-1 rounded-md dark:text-blue-200 dark:border-blue-200"
              >
                My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
