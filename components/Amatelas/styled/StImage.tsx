import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StImageProps extends StPropsConfiguration {}

export const StImage = styled.img<StImageProps>`
  ${extendsDefaultStyling()}
`;
