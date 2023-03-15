import React from "react";

import Avartar from "../Core/Avartar";
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
        <Styled.Textarea rows={3} onChange={onChangeText} />
        <Styled.Button
          color="purple"
          variant="f4-regular"
          onClick={onClickSubmit}
        >
          게시
        </Styled.Button>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default ReplyInput;
