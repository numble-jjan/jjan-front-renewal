import React, { CSSProperties, PropsWithChildren } from "react";

import * as Styled from "./index.styles";

import { textVariants } from "@/utils/createTextVariant";

import { color as colorVariants, Color } from "@/styles/theme";

type Variant = keyof typeof textVariants;

interface Props extends PropsWithChildren {
  color?: Color;
  variant: Variant;
  style?: CSSProperties;
  onClick?: () => void;
}

const Text = ({ color, variant, style, onClick, children }: Props) => {
  const { fontSize, fontWeight } = textVariants[variant || "f2-regular"];

  let colorVariatns = "black";

  if (color) {
    colorVariatns = colorVariants[color];
  }

  return (
    <Styled.Root
      color={colorVariatns}
      fontSize={fontSize}
      fontWeight={fontWeight}
      style={style}
      onClick={onClick}
    >
      {children}
    </Styled.Root>
  );
};

export default Text;
