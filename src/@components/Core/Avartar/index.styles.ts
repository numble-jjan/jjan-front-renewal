import styled from "styled-components";
import { avartarSize } from "@/styles/theme";
import type { AvartarFormat } from "@/types/avartar";

export const Wrapper = styled.div<{ size: AvartarFormat }>`
  border-radius: 50%;
  overflow: hidden;
  width: ${({ size }) => avartarSize[size].width};
  height: ${({ size }) => avartarSize[size].height};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    object-fit: contain;
  }
`;
