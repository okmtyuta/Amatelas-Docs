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

export const configurableCssPropertyDefaultValues = {
  display: {
    css: "display",
    defaultValue: "block",
  },
  flexDirection: {
    css: "flex-direction",
    defaultValue: "row",
  },
  gridAutoFlow: {
    css: "grid-auto-flow",
    defaultValue: "row",
  },
  gridTemplateAreas: {
    css: "grid-template-areas",
    defaultValue: "none",
  },
  gridTemplateRows: {
    css: "grid-template-rows",
    defaultValue: "auto",
  },
  gridTemplateColumns: {
    css: "grid-template-columns",
    defaultValue: "auto",
  },
  gridArea: {
    css: "grid-area",
    defaultValue: "auto",
  },
  alignContent: {
    css: "align-content",
    defaultValue: "normal",
  },
  justifyContent: {
    css: "justify-content",
    defaultValue: "normal",
  },
  alignItems: {
    css: "align-items",
    defaultValue: "normal",
  },
  gap: {
    css: "gap",
    defaultValue: "0",
  },
  margin: {
    css: "margin",
    defaultValue: "0",
  },
  padding: {
    css: "padding",
    defaultValue: "0",
  },
  width: {
    css: "width",
    defaultValue: "auto",
  },
  height: {
    css: "height",
    defaultValue: "auto",
  },
  minHeight: {
    css: "min-height",
    defaultValue: "auto",
  },
  maxHeight: {
    css: "max-height",
    defaultValue: "auto",
  },
  fontSize: {
    css: "font-size",
    defaultValue: "inherit",
  },
  fontFamily: {
    css: "font-family",
    defaultValue: "inherit",
  },
  fontWeight: {
    css: "font-weight",
    defaultValue: "inherit",
  },
  color: {
    css: "color",
    defaultValue: "inherit",
  },
  backgroundColor: {
    css: "background-color",
    defaultValue: "transparent",
  },
  borderRadius: {
    css: "border-radius",
    defaultValue: "0",
  },
  border: {
    css: "border",
    defaultValue: "none",
  },
  borderTop: {
    css: "border-top",
    defaultValue: "none",
  },
  borderRight: {
    css: "border-right",
    defaultValue: "none",
  },
  borderBottom: {
    css: "border-bottom",
    defaultValue: "none",
  },
  borderLeft: {
    css: "border-left",
    defaultValue: "none",
  },
  outline: {
    css: "outline",
    defaultValue: "none",
  },
  transition: {
    css: "transition",
    defaultValue: "none",
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
    defaultValue: "left",
  },
  cursor: {
    css: "cursor",
    defaultValue: "auto",
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
}
export type St = MediaQueryableProperties;
