import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StHeaderProps extends StPropsConfiguration {}

export const StHeader = styled.header<StHeaderProps>`
  ${extendsDefaultStyling()}
`;
