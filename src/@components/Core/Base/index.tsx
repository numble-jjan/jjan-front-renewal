import React, { PropsWithChildren } from "react";
import * as Styled from "./index.styles";

import type { Property } from "csstype";
import type { Color } from "@/styles/theme";

export type BaseProps = PropsWithChildren<{
  width?: Property.Width;
  height?: Property.Height;
  position?: Property.Position;
  display?: Property.Display;
  padding?: Property.Padding;
  margin?: Property.Margin;
  border?: Property.Border;
  borderRadius?: number;
  boxShadow?: Property.BoxShadow;
  backgroundColor?: Color;
}>;

const Base = (props: BaseProps) => {
  return <Styled.Base {...props} />;
};

export default Base;
