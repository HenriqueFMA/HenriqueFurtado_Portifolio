import React, { useContext } from "react";
import { LanguageNameContext } from "../lib/LangueageProvider";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";
import { texts } from "../lib/TextProjects";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const { name } = useContext(LanguageNameContext);
  const languageTexts = texts[name] || texts.EN;

  return (
    <div className="mt-32 text-white select-none overflow-x-hidden">
      {/* Título */}
      <h2 className="m-8 sm:m-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-start">
        {languageTexts.title}
      </h2>

      {/* Container dos projetos */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {languageTexts.experiences.map((experience, index) => (
          <a
            key={index}
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Card className="flex flex-col p-6 w-full max-w-[190%] sm:max-w-[600px]  h-auto items-center justify-between">
              <div className="flex flex-col flex-grow">
                <CardTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white text-center">
                  {experience.title}
                </CardTitle>
                <CardDescription className="mt-2 text-lg font-semibold text-gray-300 text-center">
                  {experience.institution}
                </CardDescription>
                <span className="mt-1 text-gray-400 text-sm">{experience.period}</span>
                <ul className="mt-4 text-white text-justify list-disc list-inside">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ícone do GitHub */}
              <div className="mt-4 flex justify-center w-full">
                <FaGithub className="text-4xl text-white transition-transform transform hover:scale-110" />
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
