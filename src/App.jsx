import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills"; 
import Header from "./components/section/Header/Header";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./lib/LangueageProvider";
import { useMediaQuery } from 'react-responsive';

function App() {
  const [screen, setScreen] = useState("home");
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <div className={`bg-black ${isDesktop ? 'h-screen' : 'h-auto'}`}>
        <LanguageProvider>
          <Header setScreen={setScreen} screen={screen}/>
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
