import React from "react";

import * as Styled from "./index.styles";
import Text from "@/@components/Atoms/Text";

import { color } from "@/styles/theme";

interface Props {
  text: string;
}

const Toast = ({ text }: Props) => (
  <Styled.Container>
    <Text color={color.white} variant="f3-regular">
      {text}
    </Text>
  </Styled.Container>
);

export default Toast;
