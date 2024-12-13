import React, { createContext, useState } from "react";

interface LanguageContextProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  imagePath: string;
  setImagePath: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageNameContext = createContext<LanguageContextProps>({
  name: "EN",
  setName: () => {},
  imagePath: "",
  setImagePath: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [name, setName] = useState("EN");
  const [imagePath, setImagePath] = useState("/src/assets/bandeiraUSA.png"); 

  return (
    <LanguageNameContext.Provider value={{ name, setName, imagePath, setImagePath }}>
      {children}
    </LanguageNameContext.Provider>
  );
};
