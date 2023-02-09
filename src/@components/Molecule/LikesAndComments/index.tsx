import React from "react";

import Text from "@/@components/Atoms/Text";
import FlexBox from "@/@components/Layout/FlexBox";

import { ReactComponent as Comment } from "@/assets/icons/icon-comment.svg";
import { ReactComponent as FilledLike } from "@/assets/icons/icon-heart-filled.svg";
import { ReactComponent as EmptyLike } from "@/assets/icons/icon-heart.svg";

import { color, font } from "@/styles/theme";

interface Props {
  onClickLike: () => void;
  onClickComment: () => void;
  likeCount: number;
  commentCount: number;
  isLike: boolean;
}

const MAX_COUNT = 999;

const clacCountView = (count: number) => {
  if (count > MAX_COUNT) {
    return MAX_COUNT;
  }

  return count;
};

const LikesAndComments = ({
  onClickLike,
  onClickComment,
  likeCount,
  commentCount,
  isLike,
}: Props) => {
  return (
    <FlexBox direction="row" gap={0.938}>
      <FlexBox direction="row" gap={0.188}>
        {isLike ? (
          <FilledLike onClick={onClickLike} />
        ) : (
          <EmptyLike onClick={onClickLike} />
        )}
        <Text
          color={color.black}
          fontWeight={font.weight.regular}
          fontSize={font.size.m}
        >
          좋아요
        </Text>
        <Text
          color={color.gray}
          fontWeight={font.weight.regular}
          fontSize={font.size.m}
        >
          {clacCountView(likeCount)}
        </Text>
      </FlexBox>
      <FlexBox direction="row" gap={0.188}>
        <Comment onClick={onClickComment} />
        <Text
          color={color.black}
          fontWeight={font.weight.regular}
          fontSize={font.size.m}
        >
          댓글
        </Text>
        <Text
          color={color.gray}
          fontWeight={font.weight.regular}
          fontSize={font.size.m}
        >
          {clacCountView(commentCount)}
        </Text>
      </FlexBox>
    </FlexBox>
  );
};

export default LikesAndComments;
