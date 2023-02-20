import React from "react";

import Text from "@/@components/Atoms/Text";
import * as Styled from "./index.styles";

const SignupCompletion = () => {
  const email = "username@email.com";

  return (
    <Styled.Container>
      <img src="./img-thumb-up.png" alt="thumb-up" />
      <Styled.Welcome>
        <Text variant="f2-regular">반갑습니다</Text>
        <Styled.Alignment>
          <Text variant="f2-bold" color="purple">
            {email}
          </Text>
          <Text variant="f2-regular">님</Text>
        </Styled.Alignment>
        <Text variant="f2-regular">JJAN 회원이 되신 걸 축하드립니다!</Text>
      </Styled.Welcome>
      <Styled.Guides>
        <Styled.Guide>
          <img src="" alt="" />
          <Styled.Alignment>
            <Text variant="f4-bold" color="purple">
              커뮤니티 서비스
            </Text>
            <Text variant="f4-regular">
              를 통해 술에 대한 정보를 공유해보세요!
            </Text>
          </Styled.Alignment>
        </Styled.Guide>
        <Styled.Guide>
          <img src="" alt="" />
          <Styled.Alignment>
            <Text variant="f4-regular">현 위치를 기반으로</Text>
            <Text variant="f4-bold" color="purple">
              내 주변 술메이트
            </Text>
            <Text variant="f4-regular">를 찾아보세요!</Text>
          </Styled.Alignment>
        </Styled.Guide>
        <Styled.Guide>
          <img src="" alt="" />
          <Styled.Alignment>
            <Text variant="f4-regular">지역기반 커뮤니티를 통해</Text>
            <Text variant="f4-bold" color="purple">
              내 지역 핫한 술집
            </Text>
            <Text variant="f4-regular">을 공유해보세요!</Text>
          </Styled.Alignment>
        </Styled.Guide>
      </Styled.Guides>
    </Styled.Container>
  );
};

export default SignupCompletion;
