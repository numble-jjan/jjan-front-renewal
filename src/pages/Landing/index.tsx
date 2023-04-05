import React from "react";

import * as Styled from "./index.styles";
import Layout from "@/@components/Layout";
import FlexBox from "@/@components/Core/Flexbox";
import Text from "@/@components/Core/Text";
import Button from "@/@components/Core/Button";

const LOGO_SRC = "/img-jjan-logo.png";

const Content = () => {
  return (
    <FlexBox justifyContent="center" alignItems="center" flexDirection="column">
      <Styled.MarginBottom margin={44}>
        <img src={LOGO_SRC}></img>
      </Styled.MarginBottom>
      <Styled.MarginBottom margin={50}>
        <Styled.MarginBottom margin={14}>
          <Text variant="f1-bold" inline={true} color="purple">
            JJAN
          </Text>
          <Text variant="f1-regular" inline={true}>
            에 오신 것을 환영합니다!
          </Text>
        </Styled.MarginBottom>
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
      <Button variant="purple" height="l">
        <Text variant="f3-bold">JJAN 회원가입</Text>
      </Button>
    </FlexBox>
  );
};

const Landing = () => {
  return (
    <Layout>
      <Layout.Content>
        <Content />
      </Layout.Content>
    </Layout>
  );
};

export default Landing;
