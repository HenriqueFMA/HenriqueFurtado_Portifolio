import React, { useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";

const AvatarDemo = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setShowMessage(true); // Mostrar mensagem ao passar o mouse
  };

  const handleMouseLeave = () => {
    setShowMessage(false); // Esconder mensagem quando o mouse sair
  };

  return (
    <div
      className="flex gap-5 select-none relative"
      onMouseMove={handleMouseMove}
    >
      <a
        href="https://github.com/HenriqueFMA"
        target="_blank"
        draggable="false"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        <Avatar.Root className="flex items-center justify-center overflow-hidden w-16 h-16 rounded-full border-blue-500 hover:border-2 bg-gray-200">
          <Avatar.Image
            className="w-full h-full object-cover rounded-full"
            src="https://avatars.githubusercontent.com/u/106880173?v=4"
            alt="Colm Tuite"
            draggable="false"
          />
          <Avatar.Fallback
            className="flex items-center justify-center text-white bg-gray-600 text-sm font-medium"
          >
            CT
          </Avatar.Fallback>
        </Avatar.Root>
      </a>

    
      

      {showMessage && (
        <div 
          style={{
            left: `${cursorPosition.x - 390}px`, 
            top: `${cursorPosition.y - 5}px`, 
          }}
          className="absolute text-white w-28 align-middle items-center bg-gray-950 px-3 py-1 rounded-md text-sm transition-opacity duration-150 ease-in-out"
        >
          Go to Github
        </div>
      )}
    </div>
  );
};

export default AvatarDemo;
