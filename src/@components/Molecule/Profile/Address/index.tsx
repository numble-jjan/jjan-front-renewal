import React from "react";
import Text from "@/@components/Atoms/Text";
import * as Styled from "./index.styles";

interface Props {
  text: string;
}

const Info = ({ text }: Props) => {
  return (
    <Styled.Wrapper>
      <Text variant="f4-regular">{text}</Text>
    </Styled.Wrapper>
  );
};

export default Info;
