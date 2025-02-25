import { FaGithub, FaDiscord } from "react-icons/fa";

import { FiExternalLink } from "react-icons/fi";
import { Helper } from "../utils/Helper";
import { Buttons } from "../components/buttons";

function AboutPage() {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const gradientBoxStyle: string =
    "w-96 h-[30rem] p-1 rounded-lg bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink";

  const boxStyle: string = "h-full w-full bg-secondary_bg relative shadow";
  const sideStyle: string = "w-1/2 h-full flex justify-center text-center items-center";
  return (
    <div className={Helper.SECTION_BASE_STYLE}>
      <div className={sideStyle}>
        <div className={gradientBoxStyle}>
          <div className={`${boxStyle} flex flex-col text-center items-stretch p-3 gap-5`}>
            <h1 className="w-full h-10 p-2 text-2xl font-dm_sans">About me</h1>
            <p className="text-sm text-justify font-dm_sans text-white p-4 bg-text_icons_bg rounded-md">
              I am a Web Developer specializing in React.js and Tailwind CSS, with extensive expertise in
              JavaScript/TypeScript. Proficient in building REST APIs using Express and Nest.js frameworks. Experienced
              in deploying production-ready code and managing both relational databases (MySQL, PostgreSQL) and NoSQL
              solutions (MongoDB). Additionally, skilled in developing simple desktop applications using C# and creating
              console applications with C++
            </p>
            <nav className="h-full w-full inline-block">
              <button
                className="w-full h-10 flex items-center gap-4 p-4 rounded-sm hover:bg-white/10"
                onClick={() => openInNewTab("https://github.com/Toren2313")}
              >
                <FaGithub />
                <p className="font-dm_sans mr-auto">Github</p>
                <FiExternalLink className="m-2" />
              </button>
              <button
                className="w-full h-10 flex items-center gap-4 p-4 rounded-sm hover:bg-white/10"
                onClick={() => openInNewTab("https://discordapp.com/users/959828866560585758")}
              >
                <FaDiscord />
                <p className="font-dm_sans mr-auto">Discord</p>
                <FiExternalLink className="m-2" />
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div className={sideStyle}>
        <div className={gradientBoxStyle}>
          <div className={`${boxStyle} flex flex-col gap-5 p-4`}>
            <h1 className="w-full h-10 p-2 text-2xl font-dm_sans">My Skills</h1>
            <h2 className="w-full h-10 p-2 font-dm_sans">Programming Languages + tech stack:</h2>
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
