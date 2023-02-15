import React from "react";

import FlexBox from "@/@components/Layout/FlexBox";
import SocialInfo from "@/@components/Molecule/SocialInfo";
import Tags from "./Tags";
import Header from "./Header";
import Content from "./Content";

interface Props {
  userName: string;
  createdAt: string;
  location: string;
  textBody: string;
  image?: string;
  tags: string[];
  likes: number;
  comments: number;
  isLike: boolean;
}

const CommunityPost = ({
  userName,
  createdAt,
  location,
  textBody,
  image,
  tags,
  likes,
  comments,
  isLike,
}: Props) => {
  return (
    <FlexBox direction="column" gap={0.938}>
      <Header userName={userName} createdAt={createdAt} location={location} />
      <Content textBody={textBody} img={image} />
      <Tags tags={tags} />
      <SocialInfo>
        <SocialInfo.Like count={likes} isLike={isLike} />
        <SocialInfo.Comment count={comments} />
      </SocialInfo>
    </FlexBox>
  );
};

export default CommunityPost;
