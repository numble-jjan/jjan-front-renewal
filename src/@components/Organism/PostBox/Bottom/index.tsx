import React from "react";

import Text from "@/@components/Atoms/Text";
import * as Styled from "./index.styles";

interface Props {
  text: string;
}

const Bottom = ({ text }: Props) => {
  return (
    <Styled.Container>
      <Text variant="f5-bold" color="dark_gray">
        {text}
      </Text>
    </Styled.Container>
  );
};

export default Bottom;
