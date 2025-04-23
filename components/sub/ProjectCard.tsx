import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[20] hover:scale-105 transition-all duration-300">
      <Image
        src={src}
        alt={"title"}
        width={1000}
        height={1000}
        className="w-full object-cover h-[300px]"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 ">{description}</p>
      </div>
      <Link href={link}>
        <div className="text-blue-500 px-4 py-2 cursor-pointer flex items-center gap-2 hover:gap-3 transition-[gap] duration-300">
          Link <FaArrowRightLong />
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
