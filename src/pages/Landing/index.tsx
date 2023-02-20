import React from "react";

import Text from "@/@components/Atoms/Text";
import Button from "@/@components/Atoms/Button";
import { ReactComponent as Logo } from "@/assets/icons/icon-logo.svg";
import * as Styled from "./index.styles";

const Landing = ({ ...props }) => {
  return (
    <Styled.Container {...props}>
      <Logo />
      <Styled.Introduction>
        <Styled.Alignment>
          <Text variant="f1-bold" color="purple">
            JJAN
          </Text>
          <Text variant="f1-regular">에 오신 것을 환영합니다.</Text>
        </Styled.Alignment>
        <Styled.Alignment direction="column" style={{ lineHeight: "20px" }}>
          <Text variant="f3-regular">같이 한잔 할 친구가 필요하신가요?</Text>
          <Text variant="f3-regular">내 주변에서 찾아보세요!</Text>
        </Styled.Alignment>
        <Styled.Alignment>
          <Text variant="f3-bold" color="purple">
            오늘 하루도 짠~!
          </Text>
        </Styled.Alignment>
      </Styled.Introduction>
      <Button shape="purple" height="l" text="JJAN 회원가입" />
    </Styled.Container>
  );
};

export default Landing;
