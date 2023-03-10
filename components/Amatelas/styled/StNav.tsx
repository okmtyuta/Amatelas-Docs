import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StNavProps extends StPropsConfiguration {}

export const StNav = styled.nav<StNavProps>`
  ${extendsDefaultStyling()}
`;
