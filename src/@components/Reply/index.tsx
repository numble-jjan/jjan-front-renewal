import React from "react";

import Profile from "@/@components/Profile";
import Text from "@/@components/Core/Text";
import * as Styled from "./index.styles";

interface Props {
  avartarSrc: string;
  username: string;
  location: string;
  createdAt: string;
  replyContent: string;
  replyLevel: number;
}

//todo: 사용자와 작성자가 같느냐에 따라서 [글쓴이]표시와 미트볼 아이콘을 삽입해야 함.
const Reply = ({
  avartarSrc,
  username,
  location,
  createdAt,
  replyContent,
  replyLevel,
}: Props) => {
  return (
    <Styled.Container>
      <Profile variant="comment">
        <Profile.Avartar src={avartarSrc} />
        <Profile.LeftDetails>
          <Profile.Name text={username} />
          <Profile.SubInfo location={location} createdAt={createdAt} />
        </Profile.LeftDetails>
      </Profile>
      <Text variant="f4-regular" lineHeight="150%">
        {replyContent}
      </Text>
      {replyLevel === 0 && <Text variant="f5-bold">답글달기</Text>}
    </Styled.Container>
  );
};
export default Reply;
