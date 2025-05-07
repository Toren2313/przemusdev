import IGradientHighlightProps from "../interfaces/IGradientHighlightProps";

export const GradientHighlight = (props: IGradientHighlightProps) => {
  return (
    <div
      className={`w-[10%] max-h-screen h-1/4 pt-20 ${props.position} bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink rounded-r-full blur-3xl opacity-80`}
    ></div>
  );
};
