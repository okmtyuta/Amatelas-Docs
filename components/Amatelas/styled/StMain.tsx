import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StMainProps extends StPropsConfiguration {}

export const StMain = styled.main<StMainProps>`
  ${extendsDefaultStyling()}
`;
