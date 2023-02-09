import React, { ReactNode } from "react";

import * as Styled from "./index.styles";
import Text from "@/@components/Atoms/Text";

import { font } from "@/styles/theme";

interface Props {
  left: ReactNode;
  right: ReactNode;
  color: string;
  size: string;
  gap?: string;
}

const DotBetweenText = ({ left, right, color, size, gap }: Props) => {
  return (
    <Styled.Container gap={gap}>
      {left}
      <Text color={color} fontSize={size} fontWeight={font.weight.regular}>
        ·
      </Text>
      {right}
    </Styled.Container>
  );
};

export default DotBetweenText;
