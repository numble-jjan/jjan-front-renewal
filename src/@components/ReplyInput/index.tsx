import React from "react";

import Avartar from "../Core/Avartar";
import Button from "../Core/Button";
import FlexItem from "../Core/FlexItem";
import Text from "../Core/Text";
import * as Styled from "./index.styles";

interface Props {
  onChangeText: React.ChangeEventHandler<HTMLTextAreaElement>;
  onClickSubmit: React.MouseEventHandler<HTMLDivElement>;
}

const ReplyInput = ({ onClickSubmit, onChangeText }: Props) => {
  /**
   * avartarSrc는 이후 전역적으로 관리될 user 정보에서 가져올 예정
   */
  const avartarSrc = "";

  return (
    <Styled.Container alignItems="center">
      <Styled.AvartarWrapper>
        <Avartar variant="comment" src={avartarSrc} />
      </Styled.AvartarWrapper>
      <Styled.TextContainer alignItems="center" padding="8px">
        <FlexItem flex={1}>
          <Styled.Textarea rows={3} onChange={onChangeText} />
        </FlexItem>
        <FlexItem>
          <Button variant="white" height="l" onClick={onClickSubmit}>
            <Text variant="f4-regular">게시</Text>
          </Button>
        </FlexItem>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default ReplyInput;
