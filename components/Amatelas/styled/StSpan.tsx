import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StSpanProps extends StPropsConfiguration {}

export const StSpan = styled.span<StSpanProps>`
  ${extendsDefaultStyling()}
  display: inline;
`;
