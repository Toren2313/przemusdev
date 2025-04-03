import React from "react";
import { Helper } from "../utils/Helper";
import IProject from "../interfaces/IProject";

const projects: IProject[] = [
  {
    title: "login-api-expressjs",
    description: "Simple example of API in typescript",
    imgSrc: "/path/to/img",
    openSrc: true,
    externaLink: new URL("https://github.com/Toren2313/login-api-expressjs"),
  },
  {
    title: "lexical-calculator",
    description: "Simple calculator wich uses tokenizer to transform math operation to RPN (reverse polish notation) ",
    imgSrc: "/path/to/img",
    openSrc: true,
    externaLink: new URL("https://github.com/Toren2313/lexical-calculator"),
  },
];

function ProjectsPage() {
  return (
    <div className={Helper.SECTION_BASE_STYLE}>
      <div className="h-full w-full p-5">
        <h1 className="font-dm_sans text-center text-2xl">My Projects</h1>
      </div>
    </div>
  );
}

export default ProjectsPage;
