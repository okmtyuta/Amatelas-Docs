import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StCodeProps extends StPropsConfiguration {}

export const StCode = styled.code<StCodeProps>`
  ${extendsDefaultStyling()}
`;
