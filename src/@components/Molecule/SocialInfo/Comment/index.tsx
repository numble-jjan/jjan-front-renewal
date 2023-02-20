import React from "react";

import Text from "@/@components/Atoms/Text";
import FlexBox from "@/@components/Layout/FlexBox";

import { ReactComponent as CommentSVG } from "@/assets/icons/icon-comment.svg";

import { color } from "@/styles/theme";

interface Props {
  onClick?: () => void;
  count: number;
}

const Comment = ({ onClick, count }: Props) => {
  return (
    <FlexBox
      direction="row"
      gap={0.188}
      style={{
        alignItems: "center",
      }}
    >
      <CommentSVG onClick={onClick} />
      <Text color={color.black} variant="f4-regular">
        댓글
      </Text>
      <Text color={color.gray} variant="f4-regular">
        {count}
      </Text>
    </FlexBox>
  );
};

export default Comment;
