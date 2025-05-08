import { useState } from "react";
import { ITooltipProps, TooltipPos } from "../interfaces/ITooltip";
import CSS from "csstype";

/**
 * Simple Tooltip with text inside
 *
 * @param children React.ReactElement
 * @param position: TooltipPos
 * @param text string
 * @returns React Component
 */
export const Tooltip = (props: ITooltipProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  /**
   *  I had to create that function becouse
   *  Tailwind doesn't support dynamic variables in classname :(
   *
   * @returns CSS object
   */
  const createGapCSSObj = (): CSS.Properties => {
    switch (props.position) {
      case TooltipPos.bottom:
        return { top: props.gap ? `${props.gap}px` : "4rem" };
      case TooltipPos.left:
        return { left: props.gap ? `-${props.gap}px` : "-4rem" };
      case TooltipPos.right:
        return { right: props.gap ? `-${props.gap}px` : "-4rem" };
      default:
        return { top: props.gap ? `-${props.gap}px` : "-4rem" };
    }
  };

  const setTooltipPosition = (): string => {
    switch (props.position) {
      case TooltipPos.bottom:
        return "left-1/2 -translate-x-1/2"; // 4rem (bottom)
      case TooltipPos.left:
        return "-top-1/2 -translate-x-1/2"; // -4rem (left)
      case TooltipPos.right:
        return "-top-1/2 translate-x-1/2"; // -4rem (right)
      default:
        return "left-1/2 -translate-x-1/2"; // -4rem (top)
    }
  };

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
          className={`absolute flex items-center justify-center cursor-pointer p-[0.125rem] ${setTooltipPosition()} min-h-8 min-w-20 h-auto w-auto rounded-md z-[999] bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink animate-appearance-fast ${isHidden ? "hidden" : ""}`}
          style={createGapCSSObj()}
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
