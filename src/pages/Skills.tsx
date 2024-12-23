import React, { useContext, useEffect, useState } from "react";
import { LanguageNameContext } from "../lib/LangueageProvider";
import { FaJava, FaPython, FaReact, FaDocker } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { SiTypescript } from "react-icons/si";


const Skills = () => {
  const { name } = useContext(LanguageNameContext);
const [title,setTitle] = useState("Skills");
  useEffect(() => {
    Language();
  }, [name]);

  const Language = () => {
    if (name === "PT") {
        setTitle("Habilidades");

    } else {
        setTitle("Skills");
    }
  };

  return (
    <div className="mt-32 text-white select-none h-screen">
      <h2 className="m-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {title}
      </h2>
      <div className="section flex flex-col items-center justify-center md:grid md:grid-cols-3 md:justify-items-center gap-8 mt-8 mb-8">
        <div className="flex flex-col items-center gap-3">
          <FaJava size={32} />
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Java
          </code>
        </div>

        <div className="flex flex-col items-center gap-3">
          <RiJavascriptFill size={32} />
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            JavaScript
          </code>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FaPython size={32} />
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Python
          </code>
        </div>
        
        <div className="flex flex-col items-center gap-3">
          <FaReact size={32} />

          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            React
          </code>
        </div>
        <div className="flex flex-col items-center gap-3">
                <SiTypescript size={32}/>


          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          Typescript
          </code>
        </div>
      </div>

   
    </div>
  );

};


export default Skills;