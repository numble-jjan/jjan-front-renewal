import styled from "styled-components";
import { colorMap, textVariantsMap } from "@/styles/theme";
import type { TextProps } from "./index";

export const Container = styled.div<TextProps>(props => ({
  fontSize: textVariantsMap[props.variant].fontSize,
  fontWeight: textVariantsMap[props.variant].fontWeight,
  color: props.color ? colorMap[props.color] : undefined,
  padding: props.padding,
  margin: props.margin,
  wordBreak: props.wordBreak,
  display: props.inline ? "inline" : "block",
  lineHeight: props.lineHeight,
}));
