import Card from "../components/card";
import IProject from "../interfaces/IProjectCardProps";

const projects: IProject[] = [
  {
    title: "login-api-expressjs",
    description: "Simple example of API in typescript.",
    imgSrc: "https://picsum.photos/1920/1080",
    openSrc: true,
    externaLink: new URL("https://github.com/Toren2313/login-api-expressjs"),
  },
  {
    title: "lexical-calculator",
    description: "Simple calculator wich uses tokenizer to transform math operation to RPN (reverse polish notation).",
    imgSrc: "https://picsum.photos/1920/1080",
    openSrc: true,
    externaLink: new URL("https://github.com/Toren2313/lexical-calculator/"),
  },
  {
    title: "przemusdev",
    description: "this page you are on right now.",
    imgSrc: "https://picsum.photos/1920/1080",
    openSrc: true,
    externaLink: new URL("https://github.com/Toren2313/przemusdev"),
  },
];

const SECTION_BASE_STYLE_CUSTOM: string = "min-h-screen min-w-screen w-screen flex lg:h-screen";

function ProjectsPage() {
  return (
    <div className={SECTION_BASE_STYLE_CUSTOM}>
      <div className="max-w-full w-full max-h-full h-full flex flex-col justify-center items-center">
        <div className="w-full max-h-full h-full container mx-auto flex flex-col items-center justify-center">
          <h1 className="font-dm_sans w-full text-center text-xl py-10">My pinned Projects</h1>
          <ul className="container mx-auto w-full grid xl:grid-cols-3 gap-10 place-items-center">
            {projects.map((project: IProject) => (
              <Card
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                openSrc={project.openSrc}
                externaLink={project?.externaLink || undefined}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
