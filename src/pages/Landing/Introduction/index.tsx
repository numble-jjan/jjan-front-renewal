import React from "react";

import * as Styled from "../index.styles";
import Text from "@/@components/Core/Text";
import FlexBox from "@/@components/Core/Flexbox";

const Introduction = () => {
  return (
    <Styled.MarginBottom margin={50}>
      <Styled.MarginBottom margin={30}>
        <FlexBox flexDirection="column" alignItems="center">
          <Text variant="f3-regular">같이 한잔 할 친구가 필요하신가요?</Text>
          <Text variant="f3-regular">내 주변에서 찾아보세요!</Text>
        </FlexBox>
      </Styled.MarginBottom>
      <div>
        <FlexBox justifyContent="center">
          <Text variant="f3-bold" color="purple">
            오늘 하루도 짠- !
          </Text>
        </FlexBox>
      </div>
    </Styled.MarginBottom>
  );
};

export default Introduction;
