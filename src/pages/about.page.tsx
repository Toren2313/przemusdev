import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function AboutPage() {
  return (
    <div className="absolute h-[calc(100vh-5rem)] w-screen flex translate-y-20">
      <div className="w-1/2 h-full flex justify-center text-center items-center">
        <div className="bg-secondary_bg relative w-96 h-[30rem] p-4 rounded-lg shadow flex flex-col text-center items-stretch">
          <h1 className="w-full h-10 p-8 text-2xl font-dm_sans">About me</h1>
          <p className="text-sm text-justify font-dm_sans text-white p-4">
            Web Developer specializing in React.js and TailwindCSS with a strong command of JavaScript/TypeScript.
            Proficient in building REST APIs using Express and Nest.js. Skilled in deploying code to production and
            managing databases like MongoDB, MySQL, and PostgreSQL. Also I can create simple desktop applications with
            C# and console applications in C++.
          </p>
          <nav className="h-full w-full  inline-block">
            <button className="w-full h-10 flex items-center gap-4">
              <FaGithub />
              <p className="font-dm_sans mr-auto">Github</p>
              <FiExternalLink />
            </button>
          </nav>
        </div>
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
}

export default AboutPage;
