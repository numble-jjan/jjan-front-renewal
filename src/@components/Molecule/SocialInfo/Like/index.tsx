import React from "react";

import FlexBox from "@/@components/Layout/FlexBox";
import Text from "@/@components/Atoms/Text";

import { ReactComponent as FilledLike } from "@/assets/icons/icon-heart-filled.svg";
import { ReactComponent as EmptyLike } from "@/assets/icons/icon-heart.svg";

import { color } from "@/styles/theme";

interface Props {
  onLike?: () => void;
  onCancle?: () => void;
  count: number;
  isLike: boolean;
}

const Like = ({ onLike, onCancle, count, isLike }: Props) => {
  return (
    <FlexBox
      direction="row"
      gap={0.188}
      style={{
        alignItems: "center",
      }}
    >
      {isLike && <FilledLike onClick={onCancle} />}
      {!isLike && <EmptyLike onClick={onLike} />}
      <Text color={color.black} variant="f4-regular">
        좋아요
      </Text>
      <Text color={color.gray} variant="f4-regular">
        {count}
      </Text>
    </FlexBox>
  );
};

export default Like;
