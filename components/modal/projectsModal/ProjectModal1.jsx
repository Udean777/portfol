import Image from "next/image";
import projects from "@/app/projects/ProjectCard";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import "animate.css";

const ProjectModal1 = ({ closeModal, title }) => {
  const targetProject = projects.find((project) => project.id === 1);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 animate__animated animate__fadeIn">
      <div className="backdrop-blur-sm bg-slate-200/95 dark:bg-gray-800/95 p-8 rounded-lg shadow-lg">
        <div className="w-99">
          <div className="flex justify-center items-center">
            <div className="mr-2">{targetProject && targetProject.icon}</div>
            <Image
              width={500}
              height={200}
              src={targetProject && targetProject.imageSrc}
              alt={title}
              className="rounded-md border-2 border-gray-800"
            />
          </div>
          <div className="text-center">
            <p className="pt-5">
              I made my first ever Portfolio using only Bootstrap & Vanilla
              JavaScript.
            </p>
          </div>
          <div className="flex justify-between pt-5">
            <div className="hover:scale-105 transition ease-in">
              <button
                onClick={closeModal}
                className="bg-gray-600 dark:bg-slate-50 rounded-md p-2 text-slate-50 dark:text-gray-800 font-bold"
              >
                Close
              </button>
            </div>

            <Link
              href={targetProject.href}
              target="__blank"
              className="flex justify-center bg-blue-500 rounded-md p-2 hover:scale-105 transition ease-in"
            >
              <span className="font-bold text-gray-100">Go to Website</span>
              <FaArrowRight className="mt-1 ms-2 text-gray-100" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal1;
