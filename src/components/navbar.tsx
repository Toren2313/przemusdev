import { GoHome } from "react-icons/go";
import { RefObject } from "react";
import { IParallax } from "@react-spring/parallax";

interface navProps {
  parallaxRef: RefObject<IParallax>;
}

export const Navbar = ({ parallaxRef }: navProps) => {
  const handleScroll = (page: number) => {
    parallaxRef.current?.scrollTo(page);
  };

  return (
    <div className="absolute top-0 h-20 w-screen flex flex-row items-center justify-center text-center z-50">
      <nav className="bg-secondary_bg h-1/2 w-1/5 flex flex-row items-center justify-center rounded-xl">
        <button onClick={() => handleScroll(0)}>
          <GoHome className="text-3xl font-bold hover:text-neon_violet duration-75 ease-in" />
        </button>
      </nav>
    </div>
  );
};
