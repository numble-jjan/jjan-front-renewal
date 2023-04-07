import React from "react";

import * as Styled from "../index.styles";
import Text from "@/@components/Core/Text";

const Congratulations = () => {
  return (
    <Styled.MarginBottom margin={14}>
      <Text variant="f1-bold" inline={true} color="purple">
        JJAN
      </Text>
      <Text variant="f1-regular" inline={true}>
        에 오신 것을 환영합니다!
      </Text>
    </Styled.MarginBottom>
  );
};

export default Congratulations;
