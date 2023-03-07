import styled from "styled-components";
import { colorMap } from "@/styles/theme";
import type { DividerProps } from "./index";

export const Divider = styled.div<DividerProps>`
  height: 1px;
  width: 100%;
  background-color: ${({ color }) => (color ? colorMap[color] : undefined)};
`;
