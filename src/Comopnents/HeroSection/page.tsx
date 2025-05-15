"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import setting from "@/asstest/setting.png";
import lighterImage from "@/asstest/lighter.png";
import profileImage from "@/asstest/subash.png";
import heroImage from "@/asstest/HeroImage.png";

const Heropage = () => {
  return (
    <div className=" py-24 relative overflow-clip  bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8f5cc5_60%,#DBAF6E_80%)]">
      <div className=" absolute rounded-[50%] w-[3000px] h-[1300px] bg-[radial-gradient(closest-side,#000_90%,#2B1942)] top-[550px] left-[50%] -translate-x-1/2 "></div>

      <div className="relative">
        <div className=" text-8xl font-bold text-center ">
          <h1 className=" text-[#98B4CE]">Hi, I am</h1>
          <h1 className=" text-[#E48A57]">Subash lal Dutta</h1>

          <motion.div
            className="absolute left-[20px] top-[120px] md:left-[60px] md:top-[150px] lg:left-[100px] lg:top-[170px]"
            drag
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              alt="Setting"
              src={setting}
              height={190}
              width={190}
              draggable="false"
              className=""
            />
          </motion.div>

          <motion.div
            className="   absolute 
    right-[30px] top-[80px]           
    sm:right-[60px] sm:top-[110px]    
    md:right-[90px] md:top-[140px]   
    lg:right-[125px] lg:top-[170px]"
            drag
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              alt="Setting"
              src={lighterImage}
              height={150}
              width={150}
              className=" "
              draggable="false"
            />
          </motion.div>

          <p className="text-xl text-white/80 max-w-[720px] mx-auto mb-8">
            I’m a frontend developer passionate about crafting sleek, responsive
            user interfaces. I also have a basic understanding of backend
            development, especially using Go, to build efficient APIs.
          </p>

          <Image
            src={heroImage}
            alt="Developer Illustration"
            className="w-auto mx-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Heropage;
