import React, { ReactNode, CSSProperties } from "react";

import * as Styled from "./index.styles";

interface Props {
  direction: "row" | "column";
  gap?: number;
  style?: CSSProperties;
  children: ReactNode;
}

const FlexBox = ({ style, direction, gap, children }: Props) => {
  return (
    <Styled.Container direction={direction} gap={gap} style={style}>
      {children}
    </Styled.Container>
  );
};

export default FlexBox;

export type StyledProps = Omit<Props, "children">;
