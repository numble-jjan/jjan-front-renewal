import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import CommunityPost from "./index";

export default {
  title: "Organism/CommunityPost",
  component: CommunityPost,
} as ComponentMeta<typeof CommunityPost>;

const Template: ComponentStory<typeof CommunityPost> = args => (
  <CommunityPost {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userName: "혼술최고야",
  createdAt: "4시간 전",
  location: "수색동",
  content:
    "오늘 안좋은 일이 있어 매운 닭발이랑 술이 땡기는데ㅠㅠ 여기로 이사온 지 얼마안되서.. 매운 닭발 맛있는 곳 추천해 주 실 수 있나요?? 그리고 몇일 전에 맛있는 치킨집을 알았는...",
  tags: ["치맥", "매운 닭발", "치맥치맥치맥치맥치맥", "태그태그태그", "치맥"],
  likes: 30,
  comments: 30,
  isLike: true,
};
