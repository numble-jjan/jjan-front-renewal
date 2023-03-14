import styled from "styled-components";
import type { ProfileVariant } from "../types";

export const Wrapper = styled.div<{ variant: ProfileVariant }>`
  margin-right: ${({ variant }) => {
    switch (variant) {
      case "author":
      case "comment":
        return "0.6875rem";
      case "profile":
        return "1.125rem";
    }
  }};
`;
