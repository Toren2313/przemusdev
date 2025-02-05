import { FaLongArrowAltDown } from "react-icons/fa";
import IParallaxRef from "../interfaces/IParalllaxRef";

export default function MainPage({ parallaxRef }: IParallaxRef) {
  const handleScroll = (page: number) => {
    parallaxRef.current?.scrollTo(page);
  };

  return (
    <div className="min-h-screen w-screen pt-20">
      <div className="absolute min-h-[calc(100vh-5rem)] w-screen flex flex-col text-center items-center translate-y-20">
        <div className=" h-96 w-[64rem] text-center rounded-lg flex flex-col items-center justify-start">
          <h1 className="text-2xl font-extrabold font-dm_sans text-neon_violet p-8 pt-16">Hello, I'm Przemyslaw</h1>
          <p className="text-7xl font-dm_sans font-bold text-center text-gray-200 p-5">14yo freelance developer</p>
          <div className="h-32 w-full flex flex-row items-center justify-center gap-40 p-8 pt-10">
            <p className="text-2xl text-neon_violet font-dm_sans font-extrabold flex flex-col">
              5+ <span className="text-sm">YEARS LEARNING</span>
            </p>
            <p className="text-2xl text-neon_violet font-dm_sans font-extrabold flex flex-col">
              2 <span className="text-sm">FINISHED PROJECT (PUBLIC)</span>
            </p>
            <p className="text-2xl text-neon_violet font-dm_sans font-extrabold flex flex-col">
              2 <span className="text-sm">PROJECTS IN PROGRESS...</span>
            </p>
          </div>
        </div>
        <button
          onClick={() => handleScroll(1)}
          className="m-10 h-14 w-28 flex text-center items-center justify-center text-white animate-bounce bg-secondary_bg rounded-lg"
        >
          <FaLongArrowAltDown />
        </button>
      </div>
    </div>
  );
}
