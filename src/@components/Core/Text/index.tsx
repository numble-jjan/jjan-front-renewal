import React from "react";
import * as Styled from "./index.styles";
import type { Property } from "csstype";
import type { Color } from "@/styles/theme";
import type { TextVariant } from "@/styles/textVariant";

export interface TextProps {
  variant: TextVariant;
  margin?: Property.Margin;
  padding?: Property.Padding;
  color?: Color;
  wordBreak?: Property.WordBreak;
  textAlign?: Property.TextAlign;
  inline?: boolean;
  lineHeight?: Property.LineHeight;
  children: string | string[];
}

const Text = (props: TextProps) => {
  return <Styled.Container {...props} />;
};

export default Text;
