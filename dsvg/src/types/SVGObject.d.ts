// genertic SVG Object definition

import { Encoding } from "./encoding";
import { SVGTransform } from "./SVGTransform";

type TagName = 'g' | 'path' | 'circle' | 'rect' | 'line' | 'text';
type RGBAstring = `rgba(${number},${number},${number},${number})`;
type RGBstring = `rgb(${number},${number},${number})`;
type Hex6String = `#${string}`;
type ColorString = RGBAstring | RGBstring | Hex6String;
type StrokeDashArray = number[];
type Percentage = `${number}%`
type FontSizeUnit = `${number}px` | `${number}em` | `${number}rem` | Percentage | number;

export interface SVGObject {
  _id?: symbol;
  name: string;
  tagName: TagName;
  class?: string | Encoding;
}

export interface G extends SVGObject {
  items: any[];
}

export interface Shape extends SVGObject {
  // fill color
  fill?: ColorString | Encoding;

  // fill opacity
  // @minimum 0
  // @maximum 1
  fillOpacity?: number | Encoding;

  // fill rule (for how the inside (i.e., the area to be filled) of a shape is determined)
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule
  // defualt: 'nonzero'
  fillRule?: 'nonzero' | 'evenodd' | Encoding;

  // filter --> url
  filter?: string | Encoding;

  // mask --> url
  mask?: string;

  opacity?: number | Encoding;

  // strooke color
  stroke?: ColorString | Encoding;

  // stroke opacity
  // @minimum 0
  // @maximum 1
  strokeOpacity?: number | Encoding;

  // stroke width
  strokeWidth?: number | Encoding;

  strokeDashArray?: StrokeDashArray | Encoding;

  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset
  strokeDashOffset?: number;

  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
  strokeLineCap?: 'butt' | 'round' | 'square';

  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
  strokeLineJoin?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round';

  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
  strokeMiterlimit?: number;

  // anyother transform
  transform?: SVGTransform;

  // vector effects
  vectorEffect?: 'none' | 'non-scaling-stroke' | 'non-scaling-size' | 'non-rotation' | 'fixed-position';

  // visibility
  visibility?: 'visible' | 'hidden' | 'collapse';
}

// by shapes

// circle
export interface Circle extends Shape {
  // center position
  cx?: number | Percentage | Encoding;
  cy?: number | Percentage | Encoding;

  // radius
  r?: number | Percentage | Encoding;

  // path length (for compatibility)
  pathLength?: number | Encoding;
}

// ellipse
export interface Ellipse extends Shape {
  // center position
  cx?: number | Percentage | Encoding;
  cy?: number | Percentage | Encoding;

  // radius
  rx?: number | Percentage | Encoding;
  ry?: number | Percentage | Encoding;

  // path length (for compatibility)
  pathLength?: number | Encoding;
}

// rectangle
export interface Rect extends Shape {
  // top-left position
  x?: number | Percentage | Encoding;
  y?: number | Percentage | Encoding;

  // size
  width?: number | Encoding;
  height?: number | Encoding;

  // corner radius
  rx: number | Percentage | Encoding;
  ry: number | Percentage | Encoding;

  // path length (for compatibility)
  pathLength?: number | Encoding;
}

// line
export interface Line extends Shape {
  // position 1
  x1?: number | Percentage | Encoding;
  y1?: number | Percentage | Encoding;

  // position 2
  x2?: number | Percentage | Encoding;
  y2?: number | Percentage | Encoding;

  // path length (for compatibility)
  pathLength?: number | Encoding;
}

// text
type TextLine = Array<string | Tspan>;

export interface Text extends Shape {
  // top-left position
  x?: number | Percentage | Encoding;
  y?: number | Percentage | Encoding;

  // relative position to previous text element
  dx?: number | Percentage | Encoding;
  dy?: number | Percentage | Encoding;

  // rotate individual letters
  rotate?: number[];

  // for compatibility
  lengthAdjust?: 'spacing' | 'spacingAndGlyphs';

  textLength?: number | Percentage;

  // styling
  fontFamily?: string;
  fontSize?: FontSizeUnit | Encoding;
  fontSizeAdjust?: number | Encoding;
  fontStretch?: Percentage | 'normal' | 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded';
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontVariant?: 'normal' | 'none' | 'small-caps' | 'all-small-caps' | 'petite-caps' | 'all-petite-caps' | 'unicase' | 'titling-caps';
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  // text content
  text: TextLine[];
}

export interface Tspan extends Text {}

// todo
export interface Path extends SVGObject {

}

// polygon
// polyline
