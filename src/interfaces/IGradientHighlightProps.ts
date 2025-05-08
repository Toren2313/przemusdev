export enum HighlightPosition {
  top_left = "top-0 left-0",
  top_right = "top-0 right-0",
  bottom_left = "bottom-0 left-0",
  bottom_right = "bottom-0 right-0",
  center_left = "top-1/2 left-0",
  center_right = "top-1/2 right-0",
}

export default interface IGradientHighlightProps {
  position: HighlightPosition;
}
