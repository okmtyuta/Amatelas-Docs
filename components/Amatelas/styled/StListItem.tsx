import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StListItemProps extends StPropsConfiguration {}

export const StListItem = styled.li<StListItemProps>`
  ${extendsDefaultStyling()}
`;
