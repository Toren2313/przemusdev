import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main.page";
import { Navbar } from "./components/navbar";
import Test from "./pages/about.page";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

export default function App() {
  const ref = useRef(null);

  return (
    <BrowserRouter>
      <Navbar parallaxRef={ref} />
      <Parallax ref={ref} pages={2} style={{ top: 0, left: 0 }}>
        <ParallaxLayer offset={0} speed={2.5}>
          <MainPage />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2.5}>
          <Test />
        </ParallaxLayer>
      </Parallax>
    </BrowserRouter>
  );
}
