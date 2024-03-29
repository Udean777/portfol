"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "@/app/globals.css";
import "animate.css";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavLink = ({ href, text }) => {
    return (
      <Link href={href}>
        <p className="hover:text-slate-200 hover:bg-stone-800 dark:hover:text-slate-700 dark:hover:bg-stone-300 transition ease-in px-3 py-2 rounded-md text-sm font-bold">
          {text}
        </p>
      </Link>
    );
  };

  return (
    <main className="sticky top-0 backdrop-blur-sm bg-zinc-50/30 dark:bg-zinc-700/30 animate__animated animate__fadeInDown z-50">
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gradient-to-r from-slate-500 to-slate-600 transition-all ease-in"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <FiX className="block h-6 w-6" />
                  ) : (
                    <FiMenu className="block h-6 w-6" />
                  )}
                </button>
              </div>
              <div className="hidden md:block font-sans">
                <div className="ml-10 flex items-baseline space-x-4 text-slate-800 dark:text-slate-200">
                  <NavLink href="/" text="Home" />
                  <NavLink href="/about" text="About" />
                  <NavLink href="/skills" text="Skills" />
                  <NavLink href="/projects" text="Projects" />
                  <NavLink href="/contact" text="Contact" />
                </div>
              </div>
            </div>
            <div className="flex items-center dark:text-white">
              <DarkModeToggle />
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:text-white">
            <NavLink href="/" text="Home" />
            <NavLink href="/about" text="About" />
            <NavLink href="/skills" text="Skills" />
            <NavLink href="/projects" text="Projects" />
            <NavLink href="/contact" text="Contact" />
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
