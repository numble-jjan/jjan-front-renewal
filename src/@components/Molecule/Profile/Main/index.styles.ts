import styled from "styled-components";
import type { ProfileFormat } from "@/styles/theme";

export const Container = styled.div<{ format: ProfileFormat }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
