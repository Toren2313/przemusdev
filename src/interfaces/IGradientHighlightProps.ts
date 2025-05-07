export enum HighlightPosition {
  start = "self-start",
  center = "self-center",
  end = "self-end",
}

export default interface IGradientHighlightProps {
  position: HighlightPosition;
}
