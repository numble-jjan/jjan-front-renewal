import styled from "styled-components";

export const Container = styled.div<{ gap?: string }>`
  display: flex;
  gap: ${props => props.gap}px;
`;
