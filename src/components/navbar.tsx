import { GoHome, GoFileDirectory } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import IParallaxRef from "../interfaces/IParalllaxRef";
import IGradientSvgProps from "../interfaces/IGradientSvgProps";
import { Tooltip } from "./tooltip";
import { TooltipPos } from "../interfaces/ITooltip";

export const Navbar = ({ parallaxRef }: IParallaxRef) => {
  const handleScroll = (page: number) => {
    parallaxRef.current?.scrollTo(page);
  };
  /**
   * Generates a gradient SVG for text styling.
   * @param {IGradientSvgProps} props - Gradient color values.
   * @returns {JSX.Element} JSX for SVG gradient.
   */
  const CreateGradientSVG = ({ startColor, middleColor, endColor }: IGradientSvgProps): JSX.Element => {
    return (
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor={startColor} offset="0%" />
          {middleColor && <stop stopColor={middleColor} offset="50%" />}
          <stop stopColor={endColor} offset="100%" />
        </linearGradient>
      </svg>
    );
  };

  const btnStyle: string = "h-full text-3xl font-bold transition duration-75 ease-in";

  return (
    <div className="absolute top-0 h-20 w-screen flex justify-between items-center text-center z-50 backdrop-blur-md shadow-sm">
      <button onClick={() => handleScroll(0)}>
        <h1 className="text-xl font-dm_sans p-4 hover:underline">PrzemusDev</h1>
      </button>
      <nav className="bg-secondary_bg h-1/2 w-1/5 flex flex-row gap-1 items-center justify-start rounded-xl p-4">
        <CreateGradientSVG startColor="#b026ff" middleColor="#db2777" endColor="#b50094" />
        <button onClick={() => handleScroll(0)}>
          <Tooltip position={TooltipPos.bottom} gap={48} text="home">
            <GoHome className={`${btnStyle} hover:fill-[url(#gradient)]`} />
          </Tooltip>
        </button>
        <button onClick={() => handleScroll(1)}>
          <Tooltip position={TooltipPos.bottom} gap={48} text="about me">
            <GoFileDirectory className={`${btnStyle} hover:fill-[url(#gradient)]`} />
          </Tooltip>
        </button>
      </nav>
      <h1 className="text-xl p-4 flex flex-row gap-10">
        <p>0</p>
        <FaEye />
      </h1>
    </div>
  );
};
