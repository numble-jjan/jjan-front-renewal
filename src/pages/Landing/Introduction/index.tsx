import React from "react";

import Text from "@/@components/Core/Text";
import FlexBox from "@/@components/Core/Flexbox";
import Base from "@/@components/Core/Base";

const Introduction = () => {
  return (
    <Base margin={`0 0 50px 0`}>
      <Base margin={`0 0 30px 0`}>
        <FlexBox flexDirection="column" alignItems="center">
          <Text variant="f3-regular">같이 한잔 할 친구가 필요하신가요?</Text>
          <Text variant="f3-regular">내 주변에서 찾아보세요!</Text>
        </FlexBox>
      </Base>
      <div>
        <FlexBox justifyContent="center">
          <Text variant="f3-bold" color="purple">
            오늘 하루도 짠- !
          </Text>
        </FlexBox>
      </div>
    </Base>
  );
};

export default Introduction;
