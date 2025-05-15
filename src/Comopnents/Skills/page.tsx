import React from "react";
import {
  SiCss3,
  SiElectron,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

const SkillsPage = () => {
  const SkillsIocns = [
    { icon: <SiHtml5 size={32} color="#e34c26" />, label: "HTML" },
    { icon: <SiCss3 size={32} color="#264de4" />, label: "CSS" },
    { icon: <SiJavascript size={32} color="#f0db4f" />, label: "JavaScript" },
    { icon: <SiReact size={32} color="#61dafb" />, label: "React" },
    { icon: <SiNextdotjs size={32} />, label: "Next.js" },
    { icon: <SiElectron size={32} color="#47848F" />, label: "Electron.js" },
  ];
  return (
    <div className=" bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className=" txet-white ma-w-[700px] mx-auto p-8 text-center">
        <h2 className=" text-6xl font-bold mb-4 "> what I Do</h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 ">
          {SkillsIocns?.map((v: any, index: number) => (
            <div
              key={index}
              className=" flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {v?.icon}
              <p className=" mt-2">{v?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
