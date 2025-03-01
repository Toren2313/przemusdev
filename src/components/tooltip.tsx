import { useState } from "react";
import { ITooltipProps } from "../interfaces/ITooltipProps";

export const Tooltip = (props: ITooltipProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  return (
    <main>
      <div
        className="relative flex flex-col items-center text-center justify-center gap-5"
        onMouseEnter={() => setIsHidden(false)}
        onMouseLeave={() => setTimeout(() => setIsHidden(true), 500)}
      >
        <span
          className={`absolute cursor-pointer top-[-2rem] left-1/2 -translate-x-1/2 h-8 w-20 bg-secondary_bg border border-gray-950 rounded-sm z-[999] ${isHidden ? "hidden" : ""}`}
        >
          <p className="text-center font-dm_sans">{props.text}</p>
        </span>
        {props.children}
      </div>
    </main>
  );
};
