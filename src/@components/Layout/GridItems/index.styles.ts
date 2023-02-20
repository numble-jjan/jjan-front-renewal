import styled from "styled-components";

export const Container = styled.div<{ gap: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.gap}px;
`;

export const ItemWrapper = styled.div<{ rows: number; gap: number }>`
  flex-basis: ${({ rows, gap }) =>
    `calc((100% - (${rows} - 1) * ${gap}px) / ${rows})`};
`;
