import styled from "styled-components";
import { fontSizing } from "../function/style/fontSizing";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StHeadlineProps extends StPropsConfiguration {
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const StHeadline = styled.h1<StHeadlineProps>`
  ${extendsDefaultStyling()}
  ${(props) => fontSizing(props.heading || "h3")}
`;
