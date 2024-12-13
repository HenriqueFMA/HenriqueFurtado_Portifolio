import React, { useContext, useState, useRef, useEffect } from "react";
import AvatarDemo from "../../ui/Avatar/Avatar";
import { LanguageNameContext } from "../../../lib/LangueageProvider";
import { FaHome } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbFolderCode } from "react-icons/tb";
import { RxBarChart } from "react-icons/rx";
import { GrAchievement } from "react-icons/gr";

interface Props {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  screen: string;
}

const Header = ({ setScreen, screen }: Props) => {
  const { name, setName, imagePath, setImagePath } = useContext(LanguageNameContext);
  const [button1, setButton1] = useState("Skills");
  const [button2, setButton2] = useState("Experiences");
  const [button3, setButton3] = useState("Projects");
  const [visible, setVisible] = useState(false);
  const [fade, setFade] = useState(false); // Controle para a transição


  const menuRef = useRef<HTMLDivElement | null>(null);
  console.log(screen + " header");

  const handleButtonClick = () => {
    setFade(true); // Inicia o fade-out

    setTimeout(() => {
      // Após o fade-out, muda o conteúdo
      if (name === "PT") {
        setName("EN");
        setButton1("Skills");
        setButton2("Experiences");
        setButton3("Projects");
        setImagePath("/src/assets/bandeiraUSA.png");
      } else {
        setName("PT");
        setButton1("Habilidades");
        setButton2("Experiências");
        setButton3("Projetos");
        setImagePath("/src/assets/bandeiranacionalbrasil.png");
      }

      setFade(false); // Inicia o fade-in
    }, 300); // Tempo suficiente para o fade-out terminar (coincide com a duração da animação)
  };


  const handleButtonClickNavigate = (screen: string) => {
    setScreen(screen);
    setVisible(false); // Fecha o menu ao navegar
  };

  const handleButtonClickVisible = () => {
    setVisible((prev) => !prev);
  };

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="section mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex justify-between h-20 w-full shrink-0 items-center px-4 md:px-6 lg:justify-around">

            <div className="flex-shrink-0 hover:scale-95  ">
              <AvatarDemo />
            </div>

        
           <div className=" gap-2 md:flex hidden">
           <button
              className="bg-black border-x-0 border-t-0  border-gray-300 text-white px-4 py-2  select-none hover:scale-x-100 hover:text-blue-500 "
              onClick={() => handleButtonClickNavigate("home")}
            >
              <FaHome size={24} />
            </button>
            <button
              className="bg-black border-x-0 border-t-0  border-gray-300 text-white px-4 py-2  select-none hover:scale-x-100 hover:text-blue-500     "
              onClick={() => handleButtonClickNavigate("Skills")}
            >
              {button1}
            </button>
            <button
              className="bg-black border-b-2 text-white px-4 py-2  border-x-0 border-t-0  border-gray-300 select-none hover:scale-x-100 hover:text-blue-500"
              onClick={() => handleButtonClickNavigate("Experiences")}
            >
              {button2}
            </button>
            <button
              className="bg-black border-b-2 text-white px-4 py-2  border-x-0 border-t-0  border-gray-300 select-none hover:scale-x-100 hover:text-blue-500"
              onClick={() => handleButtonClickNavigate("Projects")}
            >
              {button3}
            </button>
            <button
              onClick={handleButtonClick}
              className="bg-black text-white px-4 py-2 rounded flex items-center select-none transition-all border-x-0 border-t-0  border-gray-300 focus:outline-none hover:scale-x-100 hover:text-blue-500 "
            >
              <img
                src={imagePath}
                alt="Language Flag"
                className={`w-7 h-6 rounded-full clip-diagonal transition-transform duration-500 ${fade ? "-rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}

              />
              <span className="ml-2">{name}</span>
            </button>
            </div>


          <div className="flex md:hidden items-center gap-2">
            
            <button
              onClick={handleButtonClick}
              className="bg-black text-white px-4 py-2 rounded flex items-center select-none transition-all border-x-0 border-t-0  border-gray-300 focus:outline-none hover:scale-x-100 hover:text-blue-500 "
            >
              <img
                src={imagePath}
                alt="Language Flag"
                className={`w-7 h-6 rounded-full clip-diagonal transition-transform duration-500 ${fade ? "-rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}

              />
              <span className="ml-2">{name}</span>
            </button>
            <div className="flex md:hidden items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleButtonClickVisible}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
            </div>

           
        </div>
      </header>

      {visible && (
              <div
                ref={menuRef}
                className="flex bg-black flex-col mt-0.5  absolute md:hidden shadow-slate-100 shadow-md py-4 rounded-lg  right-4 max-w-xs w-[50%] overflow-auto gap-0 align-middle items-center"
              >
                <div className="align-middle items-center flex gap-5">
                  <text className="text-white ml-9 text-2xl">Menu</text>
                  <div
                    onClick={() => setVisible(false)}
                    className="bg-black text-white"
                  >
                    <IoClose />
                  </div>
                </div>
                <button
                  className="bg-black text-white px-4 py-2 rounded select-none w-full border-t-1 border-b-1 border-gray-500 flex gap-x-6 align-middle items-center"
                  onClick={() => handleButtonClickNavigate("home")}
                >
                  <FaHome size={23} /> <text>Home</text>
                </button>
                <button
                  className="bg-black text-white px-4 py-2 rounded select-none w-full border-t-1 border-b-1 border-gray-500 flex gap-x-6 align-middle items-center"
                  onClick={() => handleButtonClickNavigate("Skills")}
                >
                  <RxBarChart />
                  {button1}
                </button>
                <button
                  className="bg-black text-white px-4 py-2 rounded select-none w-full border-t-1 border-b-1 border-gray-500 flex gap-x-6 align-middle items-center"
                  onClick={() => handleButtonClickNavigate("Experiences")}
                >
                  <GrAchievement />
                  {button2}
                </button>
                <button
                  className="bg-black text-white px-4 py-2 rounded select-none w-full border-t-1 border-b-1 border-gray-500 flex gap-x-6 align-middle items-center"
                  onClick={() => handleButtonClickNavigate("Projects")}
                >
                  <TbFolderCode size={23} />
                  {button3}
                </button>
              </div>
            )}

    </div>
  );
};

export default Header;
