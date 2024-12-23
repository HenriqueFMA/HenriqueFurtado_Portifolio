import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../components/ui/Card";
import { AvatarHome } from "../components/ui/Avatar/Avatar";
import { LanguageNameContext } from "../lib/LangueageProvider";
import { useContext, useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const { name, } = useContext(LanguageNameContext);
  const [discrimination1, setDiscrimination1] = useState('I am a computer science student at the State University of Paraíba (UEPB) campus VII.');
  const [discrimination2, setDiscrimination2] = useState('I currently work in the tech industry with a focus on web applications. I excel in problem-solving skills and effective communication, consistently applying industry best practices and striving for continuous innovation and efficiency.');
  const [discrimination3, setDiscrimination3] = useState('I always strive to maintain clear and effective communication with my team, ensuring that my tasks are delivered with the highest quality.');
  const [discrimination4, setDiscrimination4] = useState('I am constantly seeking to enhance my technical knowledge to further improve my skills. Currently, I am focusing on studying React Native.');
  const isDesktop = useMediaQuery({ minWidth: 768 });
  
  useEffect(() => {
    Language();
  }, [name]);

  const Language = () => {



    if (name === "PT") {
      setDiscrimination1('Sou estudante  de ciência da computação na Universidade Estadual da Paraíba (UEPB) campus VII.');
      setDiscrimination2('Atualmente, atuo na área de tecnologia com ênfase em aplicações web. Destaco-me por minha capacidade de resolução de problemas e habilidades de comunicação, aliadas à aplicação consistente das melhores práticas do mercado e à busca contínua por inovação e eficiência.');
      setDiscrimination3('Procuro sempre manter uma comunicação clara e eficiente com minha equipe, garantindo que minhas tarefas sejam entregues com a máxima qualidade.');
      setDiscrimination4('Estou continuamente em busca de aprimorar meu conhecimento técnico para desenvolver ainda mais minhas habilidades. Atualmente, estou me dedicando ao estudo de React Native.');
    } else {
      setDiscrimination1('I am a computer science student at the State University of Paraíba (UEPB) campus VII.');
      setDiscrimination2('I currently work in the tech industry with a focus on web applications. I excel in problem-solving skills and effective communication, consistently applying industry best practices and striving for continuous innovation and efficiency.');
      setDiscrimination3('I always strive to maintain clear and effective communication with my team, ensuring that my tasks are delivered with the highest quality.');
      setDiscrimination4('I am constantly seeking to enhance my technical knowledge to further improve my skills. Currently, I am focusing on studying React Native.');
    }


  };
  return (
    <div className={`flex items-center justify-center p-3 lg:justify-around  ${isDesktop ? 'mt-36'  : 'mt-1'} select-none`}>
      <Card className="flex flex-col m-25 p-8 lg:w-[800px] lg:h-[800px]">
        <div className="flex flex-col items-center justify-center gap-4  ">
          <AvatarHome />
        </div>
        <CardTitle className="scroll-m-20 text-4xl font-extrabold  items-center justify-center tracking-tight text-white lg:text-5xl " >
          <text className="flex flex-col items-center justify-center gap-4">Henrique Furtado</text>
        </CardTitle>
        <div className="flex flex-col gap-3 mt-2 mb-2">
          <CardDescription className="leading-7 [&:not(:first-child)]:mt-6 mt-10 text-white">
            {discrimination1}
          </CardDescription>
          <CardDescription className="text-white">
            {discrimination2}  
          </CardDescription>
          <CardDescription className="text-white">
            {discrimination3}
          </CardDescription>

          <CardDescription className="text-white">
            {discrimination4}
          </CardDescription>
        </div>
        <CardFooter className="flex mt-4 items-center gap-4">
          <a
            aria-label="Linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/henrique-machado-220750242/"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            aria-label="Github"
            target="_blank"
            href="https://github.com/HenriqueFMA"
          >
            <FaGithub size={40} />
          </a>


        </CardFooter>
      </Card>

      <div className="hidden lg:flex lg:items-center">
        <img src='src\assets\programming-animate.svg' alt="programming" className="w-[600px] mr-48" draggable="false"/>
      </div>
    </div>
  );
};
export default Home;