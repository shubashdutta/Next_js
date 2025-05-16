import Image from "next/image";
import Navbar from "./commonpage/Navbar/page";
import Heropage from "@/Comopnents/HeroSection/page";
import Aboutpage from "@/Comopnents/AboutPage/page";
import ProjectPage from "@/Comopnents/Projects/page";
import SkillsPage from "@/Comopnents/Skills/page";
import ContactPage from "@/Comopnents/ContactPage/page";
import Footerpage from "@/Comopnents/Footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heropage />
      <Aboutpage />
      <ProjectPage />
      <SkillsPage />
      <ContactPage />
      <Footerpage />
    </>
  );
}
