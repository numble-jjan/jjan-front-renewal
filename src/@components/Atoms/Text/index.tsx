import React, { CSSProperties, PropsWithChildren } from "react";

import * as Styled from "./index.styles";

import { textVariants } from "@/utils/createTextVariant";

type Variant = keyof typeof textVariants;

interface Props extends PropsWithChildren {
  color?: string;
  variant: Variant;
  style?: CSSProperties;
  onClick?: () => void;
}

const Text = ({ color, variant, style, onClick, children }: Props) => {
  const { fontSize, fontWeight } = textVariants[variant || "f2-regular"];

  return (
    <Styled.Root
      color={color}
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
