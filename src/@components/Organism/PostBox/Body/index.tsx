import React from "react";

import Text from "@/@components/Atoms/Text";
import * as Styled from "./index.styles";

interface Props {
  text: string;
  sub?: string;
}

const Body = ({ text, sub }: Props) => {
  return (
    <Styled.Container>
      <Text variant="f4-regular">{text}</Text>
      {sub && (
        <Text variant="f5-regular" color="dark_gray">
          {sub}
        </Text>
      )}
    </Styled.Container>
  );
};

export default Body;
