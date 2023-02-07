import React from "react";

import * as Styled from "./index.styles";
import Text from "@/@components/Atoms/Text";

import { color, font } from "@/styles/theme";

interface Props {
  text: string;
}

const Toast = ({ text }: Props) => (
  <Styled.Container>
    <Text
      color={color.white}
      fontWeight={font.weight.regular}
      fontSize={font.size.content}
    >
      {text}
    </Text>
  </Styled.Container>
);

export default Toast;
