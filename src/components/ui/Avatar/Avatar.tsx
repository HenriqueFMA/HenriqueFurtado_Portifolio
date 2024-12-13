import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const AvatarDemo = () => (
  <div className="flex gap-5 select-none">
   <a href="https://github.com/HenriqueFMA" target="_blank" draggable="false">
   <Avatar.Root className="flex items-center justify-center overflow-hidden w-16 h-16 rounded-full bg-gray-200">
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

   
  </div>
);

export default AvatarDemo;
