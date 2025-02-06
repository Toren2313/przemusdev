import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main.page";
import { Navbar } from "./components/navbar";
import AboutPage from "./pages/about.page";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

export default function App() {
  const ref = useRef<IParallax>(null);

  return (
    <BrowserRouter>
      <Navbar parallaxRef={ref} />
      <Parallax ref={ref} pages={2} style={{ top: 0, left: 0 }}>
        <ParallaxLayer offset={0} speed={2.5}>
          <MainPage parallaxRef={ref} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2.5}>
          <AboutPage />
        </ParallaxLayer>
      </Parallax>
    </BrowserRouter>
  );
}
