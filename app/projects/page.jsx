"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import projects from "./ProjectCard";
import ProjectModal1 from "@/components/modal/projectsModal/ProjectModal1";
import "animate.css";
import ProjectModal2 from "@/components/modal/projectsModal/ProjectModal2";
import ProjectModal3 from "@/components/modal/projectsModal/ProjectModal3";
import ProjectModal4 from "@/components/modal/projectsModal/ProjectModal4";
import ProjectModal5 from "@/components/modal/projectsModal/ProjectModal5";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ProjectCard = ({ title, imageSrc, icon, id }) => {
    return (
      <button
        onClick={() =>
          openModal({ title, imageSrc, icon, href: selectedProject.href, id })
        }
        className={`block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-md backdrop-blur-sm bg-zinc-200/30`}
      >
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="w-full rounded-sm "
        />
        <div className="px-6 py-4">
          <div className="flex gap-2 justify-center">{icon}</div>
          <span className="text-md font-bold mb-2">{title}</span>
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="m-auto py-5 sm:py-10 max-w-6xl px-4 sm:px-6 md:px-8 animate__animated animate__fadeInDown text-stone-800 dark:text-stone-200 overflow-hidden">
        <h1 className="font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              openModal={() => openModal(project)}
            />
          ))}
        </div>
        {isModalOpen && selectedProject && (
          <>
            {selectedProject.id === 1 && (
              <ProjectModal1
                project={selectedProject}
                closeModal={closeModal}
                href={selectedProject.href}
              />
            )}
            {selectedProject.id === 2 && (
              <ProjectModal2
                project={selectedProject}
                closeModal={closeModal}
                href={selectedProject.href}
              />
            )}
            {selectedProject.id === 3 && (
              <ProjectModal3
                project={selectedProject}
                closeModal={closeModal}
                href={selectedProject.href}
              />
            )}
            {selectedProject.id === 4 && (
              <ProjectModal4
                project={selectedProject}
                closeModal={closeModal}
                href={selectedProject.href}
              />
            )}
            {selectedProject.id === 5 && (
              <ProjectModal5
                project={selectedProject}
                closeModal={closeModal}
                href={selectedProject.href}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
