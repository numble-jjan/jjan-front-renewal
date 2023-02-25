import React from "react";

import Text from "@/@components/Atoms/Text";
import Divider from "@/@components/Core/Divider";
import FlexBox from "@/@components/Layout/FlexBox";
import * as Styled from "./index.styles";
import Button from "@/@components/Atoms/Button";

const SignupCompletion = () => {
  const email = "username@email.com";

  return (
    <Styled.Container>
      <img src="./img-thumb-up.png" alt="thumb-up" />
      <Styled.Welcome>
        <Text variant="f2-regular">반갑습니다</Text>
        <FlexBox direction="row">
          <Text variant="f2-bold" color="purple">
            {email}
          </Text>
          <Text variant="f2-regular">님</Text>
        </FlexBox>
        <Text variant="f2-regular">JJAN 회원이 되신 걸 축하드립니다!</Text>
      </Styled.Welcome>
      <Styled.Guides>
        <Styled.Guide>
          <Styled.ImgWrapper>
            <img src="./img-conversation.png" alt="" />
          </Styled.ImgWrapper>
          <Styled.GuideText>
            <span>커뮤니티 서비스</span>를 통해 술에 대한 정보를 공유해보세요!
          </Styled.GuideText>
        </Styled.Guide>
        <Divider color="dark_gray" />
        <Styled.Guide>
          <Styled.ImgWrapper>
            <img src="./img-cheers.png" alt="" />
          </Styled.ImgWrapper>
          <Styled.GuideText>
            현 위치를 기반으로 <span>내 주변 술메이트</span>를 찾아보세요!
          </Styled.GuideText>
        </Styled.Guide>
        <Divider color="dark_gray" />
        <Styled.Guide>
          <Styled.ImgWrapper>
            <img src="./img-location.png" alt="" />
          </Styled.ImgWrapper>
          <Styled.GuideText>
            지역기반 커뮤니티를 통해 <span>내 지역 핫한 술집</span>을
            공유해보세요!
          </Styled.GuideText>
        </Styled.Guide>
      </Styled.Guides>
      <Button height="l" shape="purple" text="로그인 하기"></Button>
    </Styled.Container>
  );
};

export default SignupCompletion;
