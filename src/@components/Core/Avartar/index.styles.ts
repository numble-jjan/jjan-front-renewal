import styled from "styled-components";
import { avartarSize } from "@/styles/theme";
import type { AvartarFormat } from "@/types/avartar";

export const Wrapper = styled.div<{ variant: AvartarFormat }>`
  border-radius: 50%;
  overflow: hidden;
  width: ${({ variant }) => avartarSize[variant].width};
  height: ${({ variant }) => avartarSize[variant].height};
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
