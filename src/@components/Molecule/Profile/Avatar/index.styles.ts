import styled from "styled-components";
import { avartarSize } from "@/styles/theme";

import type { AvartarSizeName } from "@/styles/theme";

export const Wrapper = styled.div<{ size: AvartarSizeName }>`
  border-radius: 50%;
  overflow: hidden;
  /* width: ${({ size }) => avartarSize[size].width}; */
  /* height: ${({ size }) => avartarSize[size].height}; */
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
