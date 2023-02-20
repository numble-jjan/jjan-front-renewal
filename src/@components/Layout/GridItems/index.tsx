import React, { CSSProperties, ReactNode } from "react";
import * as Styled from "./index.styles";

interface Props {
  rows: number;
  gap?: number;
  children: ReactNode;
  style?: CSSProperties;
}

const GridItems = ({ rows, gap = 0, children, style }: Props) => {
  return (
    <Styled.Container gap={gap} style={style}>
      {React.Children.toArray(children).map((child, index) => (
        <Styled.ItemWrapper key={index} rows={rows} gap={gap}>
          {child}
        </Styled.ItemWrapper>
      ))}
    </Styled.Container>
  );
};

export default GridItems;
