import React from "react";

import Chip from "@/@components/Atoms/Chip";
import FlexBox from "@/@components/Layout/FlexBox";

import addHash from "@/utils/addHash";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <FlexBox direction="row" gap={0.438} style={{ flexWrap: "wrap" }}>
      {tags.map((tag, index) => (
        <Chip key={index} text={addHash(tag)} cacellation={false} />
      ))}
    </FlexBox>
  );
};

export default Tags;
