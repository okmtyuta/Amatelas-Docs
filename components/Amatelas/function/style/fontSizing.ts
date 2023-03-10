import { css } from "styled-components";
import breakPoints from "../../config/breakPoints";
import { fontSizes, fontSizeTypes } from "../../config/font";

export const fontSizing = (fontSizeType: fontSizeTypes) => {
  return css`
    @media screen and (min-width: ${breakPoints.pcMin}px) {
      font-size: ${fontSizes[fontSizeType].desktop}px;
    }
    @media screen and (min-width: ${breakPoints.tabMin}px) and (max-width: ${breakPoints.tabMax}px) {
      font-size: ${fontSizes[fontSizeType].mobile}px;
    }
    @media (max-width: ${breakPoints.spMax}px) {
      font-size: ${fontSizes[fontSizeType].mobile}px;
    }
  `;
};
