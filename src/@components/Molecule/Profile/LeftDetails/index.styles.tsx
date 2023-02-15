import styled from "styled-components";
import type { ProfileFormat } from "@/types/profile";

export const Container = styled.div<{ format: ProfileFormat }>`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > div {
    ${({ format }) => {
      switch (format) {
        case "profile":
          return { marginBottom: "4px" };
        case "author":
        case "comment":
          return { lineHeight: "1.125rem" };
      }
    }};
  }
`;
