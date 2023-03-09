import React from "react";
import Text from "../Text";
import * as Styled from "./index.styles";

interface Props {
  text: string;
}

const Popup = ({ text }: Props) => (
  <Styled.Container>
    <Text color="white" variant="f3-regular">
      {text}
    </Text>
  </Styled.Container>
);

export default Popup;
