import styled from "styled-components";
import { extendsDefaultStyling, StPropsConfiguration } from "./StConfiguration";

interface StAsideProps extends StPropsConfiguration {}

export const StAside = styled.aside<StAsideProps>`
  ${extendsDefaultStyling()}
`;
