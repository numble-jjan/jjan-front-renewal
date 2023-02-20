import styled from "styled-components";

import { color } from "@/styles/theme";

export const Container = styled.div<{
  hasBorder: boolean;
  hasPadding: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${({ hasBorder }) =>
    hasBorder ? `1px solid ${color.dark_gray}` : ""};
  height: ${({ hasPadding }) => (hasPadding ? "8.75rem" : "")};
`;
