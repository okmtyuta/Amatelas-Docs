import { MediaQueryableProperty } from "./guards/isMediaQuery";

export const configurableAnimationProperties = [
  "hover",
  "target",
  "active",
  "checked",
  "focus",
];
export type ConfigurableAnimationProperty =
  typeof configurableAnimationProperties[number];

export const INITIAL_VAlUE = "initial-value"
export const configurableCssPropertyDefaultValues = {
  display: {
    css: "display",
    defaultValue: INITIAL_VAlUE,
  },
  flexDirection: {
    css: "flex-direction",
    defaultValue: INITIAL_VAlUE,
  },
  gridAutoFlow: {
    css: "grid-auto-flow",
    defaultValue: INITIAL_VAlUE,
  },
  gridTemplateAreas: {
    css: "grid-template-areas",
    defaultValue: INITIAL_VAlUE,
  },
  gridTemplateRows: {
    css: "grid-template-rows",
    defaultValue: INITIAL_VAlUE,
  },
  gridTemplateColumns: {
    css: "grid-template-columns",
    defaultValue: INITIAL_VAlUE,
  },
  gridArea: {
    css: "grid-area",
    defaultValue: INITIAL_VAlUE,
  },
  alignContent: {
    css: "align-content",
    defaultValue: INITIAL_VAlUE,
  },
  justifyContent: {
    css: "justify-content",
    defaultValue: INITIAL_VAlUE,
  },
  alignItems: {
    css: "align-items",
    defaultValue: INITIAL_VAlUE,
  },
  gap: {
    css: "gap",
    defaultValue: INITIAL_VAlUE,
  },
  margin: {
    css: "margin",
    defaultValue: INITIAL_VAlUE,
  },
  padding: {
    css: "padding",
    defaultValue: INITIAL_VAlUE,
  },
  width: {
    css: "width",
    defaultValue: INITIAL_VAlUE,
  },
  height: {
    css: "height",
    defaultValue: INITIAL_VAlUE,
  },
  minHeight: {
    css: "min-height",
    defaultValue: INITIAL_VAlUE,
  },
  maxHeight: {
    css: "max-height",
    defaultValue: INITIAL_VAlUE,
  },
  fontSize: {
    css: "font-size",
    defaultValue: INITIAL_VAlUE,
  },
  fontFamily: {
    css: "font-family",
    defaultValue: INITIAL_VAlUE,
  },
  fontWeight: {
    css: "font-weight",
    defaultValue: INITIAL_VAlUE,
  },
  color: {
    css: "color",
    defaultValue: INITIAL_VAlUE,
  },
  backgroundColor: {
    css: "background-color",
    defaultValue: INITIAL_VAlUE,
  },
  borderRadius: {
    css: "border-radius",
    defaultValue: INITIAL_VAlUE,
  },
  border: {
    css: "border",
    defaultValue: INITIAL_VAlUE,
  },
  borderTop: {
    css: "border-top",
    defaultValue: INITIAL_VAlUE,
  },
  borderRight: {
    css: "border-right",
    defaultValue: INITIAL_VAlUE,
  },
  borderBottom: {
    css: "border-bottom",
    defaultValue: INITIAL_VAlUE,
  },
  borderLeft: {
    css: "border-left",
    defaultValue: INITIAL_VAlUE,
  },
  outline: {
    css: "outline",
    defaultValue: INITIAL_VAlUE,
  },
  transition: {
    css: "transition",
    defaultValue: INITIAL_VAlUE,
  },
  textDecoration: {
    css: "text-decoration",
    defaultValue: "none",
  },
  listStyle: {
    css: "list-style",
    defaultValue: "none",
  },
  textAlign: {
    css: "text-align",
    defaultValue: INITIAL_VAlUE,
  },
  cursor: {
    css: "cursor",
    defaultValue: INITIAL_VAlUE,
  },
  position: {
    css: "position",
    defaultValue: INITIAL_VAlUE,
  },
  top: {
    css: "top",
    defaultValue: INITIAL_VAlUE,
  },
  right: {
    css: "right",
    defaultValue: INITIAL_VAlUE,
  },
  bottom: {
    css: "bottom",
    defaultValue: INITIAL_VAlUE,
  },
  left: {
    css: "left",
    defaultValue: INITIAL_VAlUE,
  },
  zIndex: {
    css: "z-index",
    defaultValue: INITIAL_VAlUE,
  },
  overflowX: {
    css: "overflow-x",
    defaultValue: INITIAL_VAlUE,
  },
  overflowY: {
    css: "overflow-y",
    defaultValue: INITIAL_VAlUE,
  },
  transform: {
    css: "transform",
    defaultValue: INITIAL_VAlUE,
  },
  visibility: {
    css: "visibility",
    defaultValue: INITIAL_VAlUE,
  },
  opacity: {
    css: "opacity",
    defaultValue: INITIAL_VAlUE,
  },
};
export type ConfigurableCssProperty =
  keyof typeof configurableCssPropertyDefaultValues;

export type DisplayProperties =
  | "block"
  | "grid"
  | "inline-block"
  | "flex"
  | "none";
export type FlexDirectionProperties = "row" | "column";
export type GridAutoFlowProperties = "row" | "column";
export type AlignContentProperties =
  | "center"
  | "flexStart"
  | "flexEnd"
  | "spaceAround"
  | "spaceBetween"
  | "stretch";
export type JustifyContentProperties =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-around"
  | "space-between"
  | "space-evenly";
export type AlignItemsProperties =
  | "center"
  | "flexStart"
  | "flexEnd"
  | "stretch"
  | "baseline";
export type CursorProperties =
  | "pointer"
  | "help"
  | "wait"
  | "crosshair"
  | "not-allowed"
  | "zoom-in"
  | "grab";
export type PositionProperties = "relative" | "absolute" | "fixed";

export type MediaQueryable<T> = T | MediaQueryableProperty<T>;
export interface MediaQueryableProperties {
  display?: MediaQueryable<DisplayProperties>;
  flexDirection?: MediaQueryable<FlexDirectionProperties>;
  gridAutoFlow?: MediaQueryable<GridAutoFlowProperties>;
  gridTemplateAreas?: MediaQueryable<string[][]>;
  gridTemplateColumns?: MediaQueryable<string[] | string>;
  gridTemplateRows?: MediaQueryable<string[] | string>;
  gridArea?: MediaQueryable<string>;
  alignContent?: MediaQueryable<AlignContentProperties>;
  justifyContent?: MediaQueryable<JustifyContentProperties>;
  alignItems?: MediaQueryable<AlignItemsProperties>;
  gap?: MediaQueryable<string>;
  margin?: MediaQueryable<string>;
  padding?: MediaQueryable<string>;
  width?: MediaQueryable<string>;
  height?: MediaQueryable<string>;
  minHeight?: MediaQueryable<string>;
  maxHeight?: MediaQueryable<string>;
  fontSize?: MediaQueryable<string>;
  fontFamily?: MediaQueryable<string>;
  fontWeight?: MediaQueryable<string>;
  color?: MediaQueryable<string>;
  backgroundColor?: MediaQueryable<string>;
  borderRadius?: MediaQueryable<string>;
  border?: MediaQueryable<string>;
  borderTop?: MediaQueryable<string>;
  borderRight?: MediaQueryable<string>;
  borderBottom?: MediaQueryable<string>;
  borderLeft?: MediaQueryable<string>;
  outline?: MediaQueryable<string>;
  transition?: MediaQueryable<string>;
  textDecoration?: MediaQueryable<string>;
  listStyle?: MediaQueryable<string>;
  textAlign?: MediaQueryable<string>;
  cursor?: MediaQueryable<CursorProperties>;
  position?: MediaQueryable<PositionProperties>;
  top?: MediaQueryable<string>;
  right?: MediaQueryable<string>;
  bottom?: MediaQueryable<string>;
  left?: MediaQueryable<string>;
  zIndex?: MediaQueryable<string>;
  overflowX?: MediaQueryable<string>;
  overflowY?: MediaQueryable<string>;
  transform?: MediaQueryable<string>;
  visibility?: MediaQueryable<string>;
  opacity?: MediaQueryable<string>;
}
export type St = MediaQueryableProperties;
