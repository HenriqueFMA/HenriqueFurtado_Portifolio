import React, { useContext, useState, useEffect } from "react";
import { LanguageNameContext } from "../lib/LangueageProvider";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";

const Experiences = () => {
  const { name } = useContext(LanguageNameContext);
  const [texts, setTexts] = useState({
    title: "Experience",
    experiences: [],
  });

  useEffect(() => {
    updateLanguageTexts();
  }, [name]);

  const updateLanguageTexts = () => {
    if (name === "PT") {
      setTexts({
        title: "Experiências",
        experiences: [
          {
            title: "Aluno Extensionista - Ensino de Lógica e Programação",
            institution: "Universidade Estadual da Paraíba (UEPB), Patos-PB",
            period: "abr/2023 – dez/2023",
            description: [
              "Ministrava aulas de lógica de programação para alunos do Ensino Fundamental.",
              "Criava materiais didáticos e desenvolvia atividades práticas para facilitar a compreensão dos conceitos.",
              "Participava da coordenação de oficinas e eventos para estimular o interesse pela área de tecnologia entre os jovens.",
              "Colaborava com a equipe na elaboração e execução do planejamento pedagógico do projeto.",
            ],
          },
          {
            title: "Monitor de Laboratório - Linguagem de Programação I",
            institution: "Universidade Estadual da Paraíba (UEPB), Patos-PB",
            period: "mar/2024",
            description: [
              "Prestação de suporte técnico e acadêmico aos estudantes na disciplina de POO (Programação Orientada a Objetos).",
              "Auxiliava na resolução de problemas relacionados às linguagens de programação Java.",
              "Desenvolvimento de materiais didáticos e orientação na resolução de exercícios e projetos.",
              "Auxiliava o professor na preparação e condução das aulas práticas no laboratório, garantindo um ambiente dinâmico e colaborativo.",
            ],
          },
        ],
      });
    } else {
      setTexts({
        title: "Experience",
        experiences: [
          {
            title: "Extensionist Student - Teaching Logic and Programming",
            institution: "State University of Paraíba (UEPB), Patos-PB",
            period: "Apr/2023 – Dec/2023",
            description: [
              "Taught programming logic classes to elementary school students.",
              "Created educational materials and developed practical activities to facilitate the understanding of concepts.",
              "Participated in coordinating workshops and events to foster interest in the field of technology among young people.",
              "Collaborated with the team in the planning and execution of the project's educational strategies.",
            ],
          },
          {
            title: "Lab Monitor - Programming Language I",
            institution: "State University of Paraíba (UEPB), Patos-PB",
            period: "Mar/2024",
            description: [
              "Provided technical and academic support to students in the POO (Object-Oriented Programming) course.",
              "Assisted in solving problems related to Java programming languages.",
              "Developed educational materials and guided students in solving exercises and projects.",
              "Supported the professor in preparing and conducting practical classes in the laboratory, ensuring a dynamic and collaborative environment.",
            ],
          },
        ],
      });
    }
  };

  return (
    <div className="mt-32 text-white select-none overflow-x-hidden">
      {/* Título */}
      <h2 className="m-8 sm:m-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
      {texts.title}
      </h2>

      {/* Container das experiências */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {texts.experiences.map((experience, index) => (
          <Card
            key={index}
            className="flex flex-col p-8 w-full max-w-[90%] sm:max-w-[200px] items-center justify-start"
          >
            <CardTitle className="scroll-m-20 text-2xl sm:text-3xl font-extrabold tracking-tight text-white text-center">
              {experience.title}
            </CardTitle>
            <CardDescription className="mt-4 text-lg font-semibold text-gray-300 text-center">
              {experience.institution}
            </CardDescription>
            <span className="mt-2 text-gray-400 text-sm">{experience.period}</span>
            <ul className="mt-4 text-white text-justify list-disc list-inside">
              {experience.description.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
