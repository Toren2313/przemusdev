import { IoIosArrowDropdown } from "react-icons/io";
import IParallaxRef from "../interfaces/IParalllaxRef";
import { Helper } from "../utils/Helper";
import { GradientHighlight } from "../components/gradientHighlight";
import { HighlightPosition } from "../interfaces/IGradientHighlightProps";

export default function MainPage({ parallaxRef }: IParallaxRef) {
  const handleScroll = (page: number) => {
    parallaxRef.current?.scrollTo(page);
  };

  const pStyle: string = "text-2xl font-dm_sans font-extrabold flex flex-col";

  return (
    <div className="min-w-full h-full min-h-full w-full flex flex-row">
      <GradientHighlight position={HighlightPosition.start} />
      <div className="min-h-screen w-[90%] pt-20 flex">
        <div className={`flex-col text-center items-center justify-center ${Helper.SECTION_BASE_STYLE}`}>
          <div className=" h-96 w-[64rem] p-1 text-center rounded-lg flex flex-col items-center justify-start bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink">
            <div className="bg-bg_color h-full w-full">
              <h1 className={`text-2xl font-extrabold font-dm_sans p-8 pb-8 ${Helper.GRADIENT_STYLE}`}>
                Hello, I'm Przemyslaw
              </h1>
              <p className="text-7xl font-dm_sans font-bold text-center text-gray-200 p-5">14yo freelance developer</p>
              <div className="h-32 w-full flex flex-row items-center justify-center gap-40 p-8 pt-10">
                <p className={`${pStyle} ${Helper.GRADIENT_STYLE}`}>
                  5+ <span className="text-sm">YEARS LEARNING</span>
                </p>
                <p className={`${pStyle} ${Helper.GRADIENT_STYLE}`}>
                  2 <span className="text-sm">FINISHED PUBLIC PROJECTS</span>
                </p>
                <p className={`${pStyle} ${Helper.GRADIENT_STYLE}`}>
                  2 <span className="text-sm">PROJECTS IN PROGRESS</span>
                </p>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-5 h-32 w-96 mt-10 justify-center items-center">
            <button
              onClick={() => handleScroll(2)}
              className="mt-auto h-14 w-48 flex text-center items-center justify-center text-secondary_bg bg-white rounded-lg"
            >
              <p className="font-dm_sans text-sm">Let's work together!</p>
            </button>
            <button
              onClick={() => handleScroll(1)}
              className={`
              relative mt-auto h-14 w-36 flex text-center items-center justify-center bg-secondary_bg text-white rounded-lg
              before:top-0 before:left-0 
              before:content-['']
              before:absolute before:h-full before:w-full 
              before:bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink 
              before:rounded-lg
              before:bg-[length:200%_200%]
              before:blur-lg before:brightness-125 before:-z-10 before:opacity-0 before:inset-0
              before:transition-all before:duration-500 before:ease-out
             hover:before:opacity-100 hover:before:animate-move-background
              `}
            >
              <p className="font-dm_sans text-sm m-1">about me</p>
              <IoIosArrowDropdown className="text-lg m-1" />
            </button>
          </nav>
        </div>
      </div>
      <GradientHighlight position={HighlightPosition.end} />
    </div>
  );
}
