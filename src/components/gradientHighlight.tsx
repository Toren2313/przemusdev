import IGradientHighlightProps from "../interfaces/IGradientHighlightProps";

export const GradientHighlight = (props: IGradientHighlightProps) => {
  return (
    <div
      className={`absolute w-[15%] max-h-screen h-1/5 pt-20 ${props.position} bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink rounded-r-full pointer-events-none blur-3xl opacity-85 animate-pulse`}
    ></div>
  );
};
