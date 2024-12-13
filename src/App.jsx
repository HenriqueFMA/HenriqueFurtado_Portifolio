import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills"; 
import Header from "./components/section/Header/Header";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./lib/LangueageProvider";

function App() {
  const [screen, setScreen] = useState("home");
  

  return (
    <>
    <div className="bg-black w-screen h-screen">
    <LanguageProvider>
        <Header setScreen={setScreen} secreen={screen} />
        <Toaster />
        {screen === "home" ? (
          <Home setScreen={setScreen} />
        ) : screen === "Skills" ? (
          <Skills setScreen={setScreen} />
        ) : screen === "Experiences" ? (
          <Experiences setScreen={setScreen} />
        ) : screen === "Projects" ? (
          <Projects setScreen={setScreen} />
        ) : null}
      </LanguageProvider>
    </div>
    </>
  );
}

export default App;