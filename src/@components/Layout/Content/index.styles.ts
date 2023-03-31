import styled from "styled-components";
import type { Props } from "./index";

export const Container = styled.div<Props>`

  padding: 1rem;
  margin-top: ${({ hasHeader }) => (hasHeader ? `48px` : `0px`)}
  margin-bottom:  ${({ hasHeader }) => (hasHeader ? `70px` : `0px`)}
`;
