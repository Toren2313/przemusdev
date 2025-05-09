import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main.page";
import { Navbar } from "./components/navbar";
import AboutPage from "./pages/about.page";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import { Loader } from "./components/loader";
import ProjectsPage from "./pages/projects.page";

export default function App() {
  const ref = useRef<IParallax>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);

    return () => window.removeEventListener("load", handleLoading);
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 2500);

  const returnApp = () => {
    return (
      <BrowserRouter>
        <Navbar parallaxRef={ref} />
        <Parallax ref={ref} pages={3} style={{ top: 0, left: 0 }}>
          <ParallaxLayer offset={0} speed={0.4}>
            <MainPage parallaxRef={ref} />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.4}>
            <AboutPage />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.4}>
            <ProjectsPage />
          </ParallaxLayer>
        </Parallax>
      </BrowserRouter>
    );
  };

  return isLoading ? <Loader /> : returnApp();
}
