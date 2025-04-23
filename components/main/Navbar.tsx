import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-1 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-evenly md:mx-auto gap-4">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row  items-center"
        >
          <Image
            src="/avatar.png"
            alt="logo"
            width={200}
            height={70}
            className="w-[200px] h-[50px] md:w-[70px] md:h-[60px]  cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Rupesh Khadka
          </span>
        </a>

        <div className="w-[900px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] px-2 md:px-6 bg-[#0300145e] mr-[15px] gap-3 py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-2 md:gap-6 mx-1">
          {Socials.map((social, index) =>
            social.link ? (
              <Link href={social.link} key={index}>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={30}
                  height={30}
                  className="w-[100px] h-[30px] md:w-[30px] md:h-[30px] cursor-pointer"
                />
              </Link>
            ) : (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={30}
                height={30}
                className="  cursor-pointer"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
