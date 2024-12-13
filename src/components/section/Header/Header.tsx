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

  const menuRef = useRef<HTMLDivElement | null>(null);
  console.log(screen + " header");

  const handleButtonClick = () => {
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
    <div className="flex section mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex items-center justify-between h-20 w-full px-4 md:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <AvatarDemo />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-3">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded select-none"
              onClick={() => handleButtonClickNavigate("home")}
            >
              <FaHome />
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded select-none"
              onClick={() => handleButtonClickNavigate("Skills")}
            >
              {button1}
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded select-none"
              onClick={() => handleButtonClickNavigate("Experiences")}
            >
              {button2}
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded select-none"
              onClick={() => handleButtonClickNavigate("Projects")}
            >
              {button3}
            </button>
          </div>

          <button
            onClick={handleButtonClick}
            className="bg-gray-500 text-white px-4 py-2 rounded flex items-center select-none"
          >
            <img
              src={imagePath}
              alt="Language Flag"
              className="w-7 h-6 rounded-full clip-diagonal"
            />
            {name}
          </button>
        </div>
      </header>

      <div className="flex md:hidden items-center gap-2">
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

        {visible && (
          <div
            ref={menuRef}
            className="flex bg-black flex-col absolute shadow-slate-100 shadow-md py-4 rounded-lg mt-56 right-4 max-w-xs w-[50%] overflow-auto gap-0 align-middle items-center"
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
    </div>
  );
};

export default Header;
