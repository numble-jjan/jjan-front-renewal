import React from "react";

import Text from "@/@components/Core/Text";
import Base from "@/@components/Core/Base";

const Congratulations = () => {
  return (
    <Base margin={`0 0 14px 0`}>
      <Text variant="f1-bold" inline={true} color="purple">
        JJAN
      </Text>
      <Text variant="f1-regular" inline={true}>
        에 오신 것을 환영합니다!
      </Text>
    </Base>
  );
};

export default Congratulations;
