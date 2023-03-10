export const mediaQueryTypes = ["pc", "tab", "sp"] as const;
export type MediaQueryType = typeof mediaQueryTypes[number];