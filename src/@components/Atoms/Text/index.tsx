import React, { CSSProperties, PropsWithChildren } from "react";

import * as Styled from "./index.styles";

import { textVariantsMap } from "@/styles/theme";

import { color as colorVariants, Color } from "@/styles/theme";

type Variant = keyof typeof textVariantsMap;

interface Props extends PropsWithChildren {
  color?: Color;
  variant: Variant;
  style?: CSSProperties;
  onClick?: () => void;
}

const Text = ({
  color,
  variant,
  style,
  onClick,
  children,
  ...props
}: Props) => {
  const { fontSize, fontWeight } = textVariantsMap[variant || "f2-regular"];

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
      {...props}
    >
      {children}
    </Styled.Root>
  );
};

export default Text;
