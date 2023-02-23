import React from "react";
import * as Styled from "./index.styles";

const Guide = () => {
  return (
    <Styled.Container>
      <Styled.TextWithSpan variant="f2-regular">
        내 주변 술친구를 마주할
      </Styled.TextWithSpan>
      <Styled.TextWithSpan variant="f2-regular">
        <span>프로필을 등록</span>해주세요
      </Styled.TextWithSpan>
    </Styled.Container>
  );
};

export default Guide;
