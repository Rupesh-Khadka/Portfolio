"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Hire = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20  h-full w-full z-[20] mb-20"
    >
      <div className="h-full w-full flex flex-col justify-center items-center m-auto">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[850px] w-auto h-auto text-center "
        >
          <span>
            Ready to take
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 p-2 ">
              your digital presence
            </span>
            <span> to the next level?</span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(1)}
          className="flex flex-col  my-10 text-xl  text-white max-w-[750px] w-auto h-auto text-center "
        >
          <span className="text-gray-300">
            Reach out me today and let's discuss how i can help you acheive your
            goals.
          </span>
        </motion.p>

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box cursor-pointer py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
          onClick={() => {
            window.location.href = "mailto:rupeshkhadka000@gmail.com";
          }}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Get in Touch</h1>
        </motion.div>

        {/* <Link href="https://github.com/Rupesh-Khadka">
          <motion.div
            variants={slideInFromLeft(1)}
            className="py-2 button-primary px-4 text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Get in Touch
          </motion.div>
        </Link> */}
      </div>
    </motion.div>
  );
};

export default Hire;
