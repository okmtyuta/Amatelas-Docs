import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StParagraphProps extends StPropsConfiguration {}

export const StParagraph = styled.p<StParagraphProps>`
  ${extendsDefaultStyling()}
  line-height: 1.7;
`;
