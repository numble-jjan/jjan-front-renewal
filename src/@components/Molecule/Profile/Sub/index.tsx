import React from "react";
import Text from "@/@components/Atoms/Text";
import * as Styled from "./index.styels";

interface SubProps {
  text: string;
}

const Sub = ({ text }: SubProps) => {
  return (
    <Styled.Wrapper>
      <Text>{text}</Text>
    </Styled.Wrapper>
  );
};

export default Sub;
