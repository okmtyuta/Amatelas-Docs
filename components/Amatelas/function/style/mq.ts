import { css } from "styled-components";
import breakPoints from "../../config/breakPoints";

const pc = (first: TemplateStringsArray, ...args: any[]) => css`
  @media screen and (min-width: ${breakPoints.pcMin}px) {
    ${css(first, ...args)}
  }
`;
const tab = (first: TemplateStringsArray, ...args: any[]) => css`
  @media screen and (min-width: ${breakPoints.tabMin}px) and (max-width: ${breakPoints.tabMax}px) {
    ${css(first, ...args)}
  }
`;
const sp = (first: TemplateStringsArray, ...args: any[]) => css`
  @media (max-width: ${breakPoints.spMax}px) {
    ${css(first, ...args)}
  }
`;

export const mq = {
  pc,
  tab,
  sp,
};
