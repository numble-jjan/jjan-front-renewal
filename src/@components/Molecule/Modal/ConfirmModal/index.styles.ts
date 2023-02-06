import styled from "styled-components";

import { color } from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  background-color: ${color.white};
`;
