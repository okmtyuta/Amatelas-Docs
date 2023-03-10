import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StBoxProps extends StPropsConfiguration {}

export const StBox = styled.div<StBoxProps>`
  ${extendsDefaultStyling()}
`;
