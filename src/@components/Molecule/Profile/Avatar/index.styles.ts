import styled from "styled-components";
import { profileStyles } from "@/styles/theme";

import type { ProfileFormat } from "@/styles/theme";

export const Wrapper = styled.div<{ size: ProfileFormat }>`
  border-radius: 50%;
  overflow: hidden;
  width: ${({ size }) => profileStyles[size].width};
  height: ${({ size }) => profileStyles[size].height};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
