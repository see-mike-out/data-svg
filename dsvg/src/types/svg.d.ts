// an SVG (top-most level) object

import { SVGObject } from "./SVGObject";

// constant types
type ViewBox = `${number} ${number} ${number} ${number}`;
type PreserveAspectRatioType = 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax';
type PreserveAspectRatioOverflow = 'meet' | 'slice';

export interface SVG {
  // name of the graphic
  name: string;

  // sizing
  width: number;
  height: number;

  // view box
  viewBox: ViewBox;

  // aspect ratio (for compatibility)
  preserveAspectRatioType: `${PreserveAspectRatioType}` | `${PreserveAspectRatioType} ${PreserveAspectRatioOverflow}`;

  // grapchic items
  items: SVGObject[];

  // graphic definitions
  defs: any[]; // todo

  // filter definitions
  filter: any[]; // todo

  // mask definitions
  mask: any[]; // todo

  // style definitions
  style: any[]; // todo

  // external text/overlap text
  text: any[]; // todo
}