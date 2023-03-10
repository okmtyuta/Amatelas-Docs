import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StListProps extends StPropsConfiguration {}

export const StList = styled.ul<StListProps>`
  ${extendsDefaultStyling()}
`;
