import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StLinkProps extends StPropsConfiguration {}

export const StLink = styled.a<StLinkProps>`
  ${extendsDefaultStyling()}
  display: inline;
`;
