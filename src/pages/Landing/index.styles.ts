import styled from "styled-components";

export const MarginBottom = styled.div<{ margin: number }>`
  margin-bottom: ${({ margin }) => margin}px;
`;
