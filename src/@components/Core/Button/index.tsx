import React, { PropsWithChildren } from "react";
import * as Styled from "./index.styles";
import type { Property } from "csstype";

export type ButtonVariant =
  | "purple"
  | "whiteWithPurple"
  | "whiteWithGray"
  | "gray";
export type ButtonHeight = "xs" | "m" | "l";

export interface ButtonProps extends PropsWithChildren {
  variant: ButtonVariant;
  height: ButtonHeight;
  width?: Property.Width;
}

const Button = (props: ButtonProps) => {
  return <Styled.Container {...props} />;
};

export default Button;
