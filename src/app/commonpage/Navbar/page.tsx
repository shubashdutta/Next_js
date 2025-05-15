"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

const navList = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Projects", link: "#projects" },
];

const menuBarMotion = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 15,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 15,
    },
  },
};

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <div className="text-white/70 pt-4 relative">
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-2 space-x-8">
          {navList.map((v, index) => (
            <li key={index}>
              <Link href={v.link}>{v.label}</Link>
            </li>
          ))}
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 text-white/70 border-white/70 p-2 z-50"
      >
        {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
      </div>

      <motion.div
        initial="closed"
        animate={nav ? "open" : "closed"}
        variants={menuBarMotion}
        className="fixed top-0 left-0 h-screen w-3/4 max-w-sm bg-black z-40 px-6 py-10"
      >
        <ul className="text-2xl font-semibold space-y-6">
          {navList.map((v, index) => (
            <li key={index}>
              <Link href={v.link} onClick={closeNav}>
                {v.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>

      {nav && (
        <div
          onClick={closeNav}
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-30"
        />
      )}
    </div>
  );
}
