import styled from "styled-components";
import { avartarSize } from "@/styles/theme";
import type { AvartarVariant } from "./index";

export const Wrapper = styled.div<{ variant: AvartarVariant }>`
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
