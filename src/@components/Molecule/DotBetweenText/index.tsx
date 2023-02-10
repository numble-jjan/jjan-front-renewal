import React, { ReactNode } from "react";

import Text from "@/@components/Atoms/Text";
import FlexBox from "@/@components/Layout/FlexBox";

import { font } from "@/styles/theme";

interface Props {
  left: ReactNode;
  right: ReactNode;
  color: string;
  size: string;
  gap?: number;
}

const DotBetweenText = ({ left, right, color, size, gap }: Props) => {
  return (
    <FlexBox direction="row" gap={gap}>
      {left}
      <Text color={color} fontSize={size} fontWeight={font.weight.regular}>
        ·
      </Text>
      {right}
    </FlexBox>
  );
};

export default DotBetweenText;
