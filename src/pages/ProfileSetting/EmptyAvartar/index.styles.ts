import styled from "styled-components";
import { color } from "@/styles/theme";

export const Container = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28px;
  height: 28px;
  background-color: ${color.purple};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
