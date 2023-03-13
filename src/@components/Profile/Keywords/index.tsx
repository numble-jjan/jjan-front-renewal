import React, { useContext } from "react";
import Text from "@/@components/Atoms/Text";
import { profileContext } from "../Main";
import * as Styled from "./index.styels";

import { SUB_INFO } from "../textMap";
import addHash from "@/utils/addHash";

interface KeywordsProps {
  tags: string[];
}

const Keywords = ({ tags }: KeywordsProps) => {
  const profile = useContext(profileContext);
  // const parsedTags =
  return (
    <Styled.Wrapper>
      {tags.map((tag, index) => (
        <Text key={index} variant={SUB_INFO[profile]} color="gray">
          {addHash(tag)}&nbsp;
        </Text>
      ))}
    </Styled.Wrapper>
  );
};

// 서울 역삼 1동
// # 감성적인 # 조용한
// @수색동 ' 4시간 전

// 1. string으로 통으로 받음
// 2. 컴포넌트 분리 Sub => Address, keywords, location(subint)

export default Keywords;
