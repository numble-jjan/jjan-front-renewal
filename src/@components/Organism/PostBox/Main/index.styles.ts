import styled from "styled-components";
import { color } from "@/styles/theme";

export const Container = styled.div`
  width: 50%;
  height: 10rem;
  border: 1px solid ${color.light_gray1};
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;
