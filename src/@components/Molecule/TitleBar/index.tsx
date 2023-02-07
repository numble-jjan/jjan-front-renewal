import React from "react";

import * as Styled from "./index.styles";
import Text from "@/@components/Atoms/Text";
import Divider from "@/@components/Atoms/Divider";

import { color, font } from "@/styles/theme";

interface Props {
  content: string;
  required: boolean;
}

const Required = () => {
  return (
    <Styled.RequiredWrapper>
      <Text color={color.purple}>*</Text>
      <Text fontSize={font.size.m}>필수사항</Text>
    </Styled.RequiredWrapper>
  );
};

const TitleBar = ({ content, required, ...rest }: Props) => {
  return (
    <Styled.Container {...rest}>
      <Styled.Texts>
        <Text>{content}</Text>
        {required && <Required />}
      </Styled.Texts>
      <Divider color={color.black} />
    </Styled.Container>
  );
};

export default TitleBar;
