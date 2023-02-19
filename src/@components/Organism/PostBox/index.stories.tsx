import React from "react";

import PostBox from "./index";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Organism/PostBox",
  component: PostBox,
} as ComponentMeta<typeof PostBox>;

export const CommunityActivity: ComponentStory<typeof PostBox> = () => (
  <PostBox>
    <PostBox.CommunityHeader likes="27" date="22.11.12" />
    <PostBox.Body text="가산디지털 직장인 회식 장소로 제격인 곳 추천드립니다." />
    <PostBox.Bottom text="술 메이트 찾기" />
  </PostBox>
);

export const Favorites: ComponentStory<typeof PostBox> = () => (
  <PostBox>
    <PostBox.LocationHeader location="서울 마포구 서교동" />
    <PostBox.Body text="역전할머니맥주 강남역삼점" sub="맥주, 호프" />
    <PostBox.Bottom text="자세히보기" />
  </PostBox>
);
