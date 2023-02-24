import styled from "styled-components";
// import { HTMLAttributes } from "react";
import { Property } from "csstype";
import { Base, BaseProps } from "../Base";

export interface FlexBoxProps extends BaseProps {
  flexDirection?: Property.FlexDirection;
  flexWrap?: Property.FlexWrap;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  gap?: Property.Gap;
  columnGap?: Property.ColumnGap;
  rowGap?: Property.RowGap;
}

export const FlexBox = styled(Base)<FlexBoxProps>(props => ({
  display: "flex",
  flexDirection: props.flexDirection,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  flexWrap: props.flexWrap,
  gap: props.gap,
  columnGap: props.columnGap,
  rowGap: props.rowGap,
}));
