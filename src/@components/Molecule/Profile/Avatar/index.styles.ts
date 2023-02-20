import styled from "styled-components";
import type { ProfileFormat } from "@/types/profile";

export const Wrapper = styled.div<{ format: ProfileFormat }>`
  margin-right: ${({ format }) => {
    switch (format) {
      case "author":
      case "comment":
        return "0.6875rem";
      case "profile":
        return "1.125rem";
    }
  }};
`;
