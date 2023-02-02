import React, { CSSProperties } from "react";

import * as Styled from "./index.styles";
import { buttonHeight } from "../../../styles/theme";

export type ButtonShape =
  | "purple"
  | "whiteWithPurple"
  | "whiteWithGray"
  | "gray";

export type ButtonHeight = "xs" | "m" | "l";

interface Props {
  text: string;
  shape: ButtonShape;
  height: ButtonHeight;
  width?: number;
  style?: CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  text,
  shape,
  width,
  height = "m",
  style,
  onClick,
  disabled,
}: Props) => {
  const heightValue = buttonHeight[height];

  return (
    <Styled.Root
      shape={shape}
      height={heightValue}
      width={width}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Styled.Root>
  );
};

export default Button;
