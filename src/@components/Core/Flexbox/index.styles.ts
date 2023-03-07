import styled from "styled-components";
import Base from "../Base";
import type { FlexBoxProps } from "./index";

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
