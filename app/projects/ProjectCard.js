import React from "react";
import Link from "next/link";

const ProjectCard = ({ title, imageSrc, href, icon }) => {
  return (
    <Link href={href} target="__blank">
      <div className="block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-md backdrop-blur-sm bg-zinc-200/30">
        <img
          loading="lazy"
          className="w-full rounded-sm lg:h-24 md:h-24 h-36"
          src={imageSrc}
          alt={title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-md mb-2">{title}</div>
          <div className="flex gap-2">{icon}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
