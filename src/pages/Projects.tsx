import React, { useContext } from "react";
import { LanguageNameContext } from "../lib/LangueageProvider";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";
import { texts } from "../lib/TextProjects";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const { name } = useContext(LanguageNameContext);
  const languageTexts = texts[name] || texts.EN;

  return (
    <div className="mt-32 text-white select-none">
      <h2 className="m-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {languageTexts.title}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {languageTexts.experiences.map((experience, index) => (
          <a
            key={index}
            href={experience.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Card className="flex flex-col p-8 w-[500px] h-[450px] items-center justify-between hover:bg-neutral-950 hover:scale-110 hover:shadow-sm transition-all gap-4">
              <div className="flex flex-col flex-grow">
                <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-3xl text-center">
                  {experience.title}
                </CardTitle>
                <CardDescription className="text-xl font-semibold text-gray-300 text-center">
                  {experience.institution}
                </CardDescription>
                <span className="text-gray-400 text-sm">{experience.period}</span>
                <ul className="text-white text-justify list-disc list-inside mt-4">
                  {experience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex justify-center w-full">
                <FaGithub className="text-4xl text-white" />
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
