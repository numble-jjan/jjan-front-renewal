import styled from "styled-components";

import { StyledProps } from "./index";

export const Container = styled.div<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => `${gap}rem`};
`;
