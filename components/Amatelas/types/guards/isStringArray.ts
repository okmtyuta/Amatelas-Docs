import { isString } from "./isPrimary";

export const isStringArray = (params: unknown): params is string[] => {
  const stringArray = params as string[]
  return Array.isArray(stringArray) && stringArray.every(isString);
};
