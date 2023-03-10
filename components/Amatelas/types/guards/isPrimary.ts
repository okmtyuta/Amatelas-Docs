export const isString = (params: unknown): params is String => {
  return typeof params === "string";
};
