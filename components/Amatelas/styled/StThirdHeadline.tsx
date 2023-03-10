import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StThirdHeadlineProps extends StPropsConfiguration {}

export const StThirdHeadline = styled.span<StThirdHeadlineProps>`
  ${extendsDefaultStyling()}
  font-weight: bold;
  display: inline-block;
  padding-right: 12px;
`;
