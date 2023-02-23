import React from "react";

import * as Styled from "./index.styles";
import Text from "@/@components/Atoms/Text";
import Divider from "@/@components/Atoms/Divider";

interface Props {
  content: string;
  required: boolean;
}

const Required = () => {
  return (
    <Styled.RequiredWrapper>
      <Text color="purple" variant="f4-regular">
        *
      </Text>
      <Text variant="f4-regular">필수사항</Text>
    </Styled.RequiredWrapper>
  );
};

const TitleBar = ({ content, required, ...rest }: Props) => {
  return (
    <Styled.Container {...rest}>
      <Styled.Texts>
        <Text variant="f2-regular">{content}</Text>
        {required && <Required />}
      </Styled.Texts>
      <Divider color="black" />
    </Styled.Container>
  );
};

export default TitleBar;
