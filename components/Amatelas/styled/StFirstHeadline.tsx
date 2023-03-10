import styled from "styled-components";
import { fontSizing } from "../function/style/fontSizing";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StFirstProps extends StPropsConfiguration {}

export const StFirstHeadline = styled.h1<StFirstProps>`
  ${extendsDefaultStyling()}
  ${fontSizing("h2")}
`;
