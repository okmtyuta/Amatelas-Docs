import { isStringArray } from "./isStringArray";

export const isStringMatrix = (params: unknown): params is string[][] => {
  const stringMatrix = params as string[][];
  return Array.isArray(stringMatrix) && stringMatrix.every(isStringArray);
};
