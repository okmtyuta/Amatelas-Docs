import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StPreProps extends StPropsConfiguration {}

export const StPre = styled.pre<StPreProps>`
  ${extendsDefaultStyling()}
`;
