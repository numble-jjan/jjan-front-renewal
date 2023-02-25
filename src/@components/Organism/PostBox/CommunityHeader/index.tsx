import React from "react";

import Text from "@/@components/Atoms/Text";
import Divider from "@/@components/Core/Divider";
import { ReactComponent as Heart } from "@/assets/icons/icon-heart.svg";
import * as Styled from "./index.styles";
import { color } from "@/styles/theme";

interface Props {
  likes: string;
  date: string;
}

const CommunityHeader = ({ likes, date }: Props) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Like>
          <Heart />
          <Text variant="f4-bold" color="purple">
            {likes}
          </Text>
        </Styled.Like>
        <Text variant="f5-regular" color="dark_gray">
          {date}
        </Text>
      </Styled.Content>
      <Divider color={color.light_gray1} />
    </Styled.Container>
  );
};

export default CommunityHeader;
