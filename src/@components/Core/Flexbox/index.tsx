import React from "react";
import * as Styled from "./index.styles";

import type { BaseProps } from "../Base";
import type { Property } from "csstype";

export interface FlexBoxProps extends BaseProps {
  flexDirection?: Property.FlexDirection;
  flexWrap?: Property.FlexWrap;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  gap?: Property.Gap;
  columnGap?: Property.ColumnGap;
  rowGap?: Property.RowGap;
}

export const FlexBox = (props: FlexBoxProps) => {
  return <Styled.FlexBox {...props}></Styled.FlexBox>;
};
