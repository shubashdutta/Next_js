"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import zimra from "@/asstest/zimra.png";
import roadsewa from "@/asstest/roadsewa.png";
import N1 from "@/asstest/project1.png";
import nepalOil from "@/asstest/Nepaloil.png";

const project = [
  {
    title: "Nepal Oil Corporation",
    describe:
      "Dealer dashboard portal to manage fuel logistics and distribution.",
    link: "https://dashboard.nepaloilcorporation.com/dealer/login",
    src: nepalOil,
  },
  {
    title: "Zimra Studio",
    describe: "A complete HR and payroll management platform.",
    link: "https://zimrastudio.com/",
    src: zimra,
  },
  {
    title: "Road-Sewa",
    describe: "Vehicle service and maintenance booking application.",
    link: "https://roadsewa.com/",
    src: roadsewa,
  },
  {
    title: "News Agency",
    describe: "A modern web platform for publishing and managing news content.",
    link: "https://web.n1atm.com/",
    src: N1,
  },
];

const ProjectPage = () => {
  return (
    <section
      className="bg-gradient-to-b from-black to-[#381a5f] py-20 px-4 text-white"
      id="project"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My Projects
        </h2>
        {project?.map((v, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 max-w-xl">
              <h3 className="text-2xl font-semibold mb-2">{v.title}</h3>
              <p className="text-white/80 mb-4">{v.describe}</p>
              <a
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#f0f0f0] transition"
              >
                Visit Site
              </a>
            </div>
            <div className="flex-1 max-w-xl rounded-xl overflow-hidden shadow-lg">
              <Image
                alt={v.title}
                src={v.src}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
