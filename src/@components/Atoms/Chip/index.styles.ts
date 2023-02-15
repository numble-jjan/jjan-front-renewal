import styled from "styled-components";

import { color, font } from "@/styles/theme";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid ${color.light_gray1};
  border-radius: 0.75rem;
  color: ${color.dark_gray};
  font-size: ${font.size.f5};
  font-weight: ${font.weight.regular};
  height: 1.5rem;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  padding: 0.2rem;
  border-radius: 50%;
  margin-left: 0.25rem;
  & svg {
    stroke: white;
  }
`;
