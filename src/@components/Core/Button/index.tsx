import React, { PropsWithChildren } from "react";
import * as Styled from "./index.styles";
import type { Property } from "csstype";
import type { ButtonHeight, ButtonVariant } from "./types";

export interface ButtonProps extends PropsWithChildren {
  variant: ButtonVariant;
  height: ButtonHeight;
  width?: Property.Width;
  disabled?: boolean;
}

const Button = ({ ...props }: ButtonProps) => {
  return <Styled.Container {...props} />;
};

export default Button;
