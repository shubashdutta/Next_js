"use client";

import Image from "next/image";
import React from "react";
import book from "@/asstest/book.png";
import proble from "@/asstest/problem.png";
import Experience from "@/asstest/ExperienceImage.png";
import Technical from "@/asstest/Image.png";

const Aboutpage = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" id="about">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-8 text-center">
        About <span className="text-orange-400">Me</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6 place-items-center">
        <div className="w-full lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
          <div className="flex flex-row p-6 gap-4 sm:gap-6 items-center">
            <Image
              alt="study"
              src={book}
              className="w-auto h-[100px] sm:h-[130px]"
            />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Education</h2>
              <p className="text-lg text-white/70 mt-2">
                I hold a Bachelor’s degree in Computer Applications from Guru
                Kashi University (2023). I am currently focused on building
                modern web applications using React, Next.js, Tailwind CSS, and
                Bootstrap.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
          <div className="flex flex-row p-6 gap-4 sm:gap-6 items-center">
            <Image
              alt="problem-solving"
              src={proble}
              className="w-auto h-[100px] sm:h-[130px]"
            />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Problem-Solving
              </h2>
              <p className="text-lg text-white/70 mt-2">
                I enjoy solving complex problems with efficient, scalable
                solutions using my frontend and backend skills.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
          <div className="flex flex-row p-6 gap-4 sm:gap-6 items-center">
            <Image
              alt="experience"
              src={Experience}
              className="w-auto h-[100px] sm:h-[130px]"
            />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Experience</h2>
              <p className="text-lg text-white/70 mt-2">
                I have hands-on experience building responsive web applications
                using React, Next.js, and Tailwind CSS. I also work with basic
                backend logic in Go to support frontend functionality.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
          <div className="flex flex-row p-6 gap-4 sm:gap-6 items-center">
            <Image
              alt="technical skills"
              src={Technical}
              className="w-auto h-[100px] sm:h-[130px]"
            />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Technical Skills
              </h2>
              <p className="text-lg text-white/70 mt-2">
                Skilled in React, Next.js, Tailwind CSS, JavaScript, and Go with
                strong full-stack problem-solving abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
