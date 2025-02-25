import { SiExpress, SiPrettier, SiGithubactions } from "react-icons/si";
import {
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  EslintOriginal,
  Html5Original,
  JavascriptOriginal,
  NestjsOriginal,
  NodejsOriginal,
  PhpOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VitejsOriginal,
} from "devicons-react";
import { FaWpforms } from "react-icons/fa";
export const Buttons = () => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <ul className="flex flex-wrap items-center justify-center gap-5 m-0 p-4 h-36 w-full list-none bg-text_icons_bg rounded-md custom-hover">
      <button>
        <CsharpOriginal onClick={() => openInNewTab("https://learn.microsoft.com/en-us/dotnet/csharp/")} size={22} />
      </button>

      <button>
        <CplusplusOriginal
          onClick={() => openInNewTab("https://learn.microsoft.com/en-us/cpp/?view=msvc-170")}
          size={22}
        />
      </button>

      <button>
        <Html5Original onClick={() => openInNewTab("https://html.spec.whatwg.org/multipage/")} size={22} />
      </button>

      <button>
        <Css3Original onClick={() => openInNewTab("https://devdocs.io/css/")} size={22} />
      </button>

      <button>
        <PhpOriginal onClick={() => openInNewTab("https://www.php.net/docs.php")} size={22} />
      </button>

      <button>
        <JavascriptOriginal
          onClick={() => openInNewTab("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}
          size={22}
        />
      </button>

      <button>
        <TypescriptOriginal onClick={() => openInNewTab("https://www.typescriptlang.org/docs/")} size={22} />
      </button>

      <button>
        <NodejsOriginal onClick={() => openInNewTab("https://nodejs.org/docs/latest/api/")} size={22} />
      </button>
      <button>
        <SiExpress onClick={() => openInNewTab("https://expressjs.com/")} size={22} />
      </button>

      <button>
        <NestjsOriginal onClick={() => openInNewTab("https://docs.nestjs.com/")} size={22} />
      </button>

      <button>
        <VitejsOriginal onClick={() => openInNewTab("https://vite.dev/")} size={22} />
      </button>

      <button>
        <EslintOriginal onClick={() => openInNewTab("https://eslint.org/docs/latest/")} size={22} />
      </button>
      <button>
        <SiPrettier onClick={() => openInNewTab("https://prettier.io/docs/")} size={22} />
      </button>

      <button>
        <SiGithubactions onClick={() => openInNewTab("https://github.com/features/actions")} size={22} />
      </button>

      <button>
        <TailwindcssOriginal onClick={() => openInNewTab("https://tailwindcss.com/")} size={22} />
      </button>

      <button>
        <FaWpforms
          onClick={() =>
            openInNewTab(
              "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/getting-started/?view=netframeworkdesktop-4.8",
            )
          }
          size={22}
        />
      </button>
    </ul>
  );
};
