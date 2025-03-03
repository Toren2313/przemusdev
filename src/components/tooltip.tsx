import { useState } from "react";
import { ITooltipProps } from "../interfaces/ITooltipProps";

export const Tooltip = (props: ITooltipProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  // const speechBubble: string =
  //   "after:border-2 after:border-solid after:border-transparent after:border-b-0 after:border-l-0 after:-ml-4 after:-mb-8 after:left-1/2 after:bottom-0 after:content-['']";

  return (
    <main>
      <div
        className="relative flex flex-col items-center text-center justify-center gap-5"
        onMouseEnter={() => setIsHidden(false)}
        onMouseLeave={() => setTimeout(() => setIsHidden(true), 300)}
      >
        <div
          className={`absolute flex items-center justify-center cursor-pointer p-[0.125rem] -top-16 left-1/2 -translate-x-1/2 min-h-8 min-w-20 h-auto w-auto rounded-md z-[999] bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink animate-appearance-fast ${isHidden ? "hidden" : ""}`}
          onMouseEnter={() => setIsHidden(false)}
          onMouseLeave={() => setTimeout(() => setIsHidden(true), 300)}
        >
          <span className="bg-secondary_bg w-full p-2 h-full rounded-md">
            <p className="w-full h-full text-sm text-center font-dm_sans">{props.text}</p>
          </span>
        </div>
        {props.children}
      </div>
    </main>
  );
};
