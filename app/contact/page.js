import React from "react";
import Navbar from "../components/Navbar";
import socialLinks from "./socialLinks";
import Link from "next/link";
import ContactMe from "../components/contactMe";

const SocialLink = ({ icon, label, href, colorClass, borderColorClass }) => {
  return (
    <Link
      href={href}
      target="__blank"
      className={`w-44 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105 text-slate-600 dark:text-slate-200 bg-transparent dark:hover:bg-transparent hover:bg-transparent hover:${colorClass} border-2 border-slate-600 dark:border-slate-200 dark:hover:${colorClass} hover:${borderColorClass} dark:hover:${borderColorClass} transition ease-in`}
    >
      {icon}
      <span className="flex justify-center pb-2 font-sans font-bold">
        {label}
      </span>
    </Link>
  );
};

export default function page() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="m-auto py-5 md:py-10 lg:py-10 max-w-6xl px-4 sm:px-6 md:px-8 animate__animated animate__fadeInDown text-stone-800 dark:text-stone-200 overflow-hidden">
        <h1 className="font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8">
          CONTACT
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
      <ContactMe />
    </div>
  );
}
