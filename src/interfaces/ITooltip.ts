import React from "react";

export enum TooltipPos {
  top,
  bottom,
  left,
  right,
}
export interface ITooltipProps {
  children: React.ReactElement<unknown>;
  position: TooltipPos;
  text: string;
  gap?: number;
}
