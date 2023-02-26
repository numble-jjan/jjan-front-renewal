import styled from "styled-components";
import { colorMap } from "@/styles/theme";
import textVariantMap from "@/styles/textVariant";
import type { TextProps } from "./index";

export const Container = styled.div<TextProps>(props => ({
  fontSize: textVariantMap[props.variant].fontSize,
  fontWeight: textVariantMap[props.variant].fontWeight,
  color: props.color ? colorMap[props.color] : undefined,
  padding: props.padding,
  margin: props.margin,
  wordBreak: props.wordBreak,
  display: props.inline ? "inline" : "block",
  lineHeight: props.lineHeight,
}));
