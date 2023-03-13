import styled from "styled-components";
import type { ProfileVariant } from "../types";

export const Container = styled.div<{ variant: ProfileVariant }>`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > div {
    ${({ variant }) => {
      switch (variant) {
        case "profile":
          return { marginBottom: "4px" };
        case "author":
        case "comment":
          return { lineHeight: "1.125rem" };
      }
    }};
  }
`;
