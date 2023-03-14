import React from "react";

import Reply from "./index";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecule/Reply",
  component: Reply,
} as ComponentMeta<typeof Reply>;

const Template: ComponentStory<typeof Reply> = args => <Reply {...args} />;

export const DepthZero = Template.bind({});
DepthZero.args = {
  avartarSrc: "./profile-anonymous.png",
  username: "jjan123456",
  createdAt: "4시간 전",
  location: "수색동",
  replyContent:
    "저는 이 동네로 이사온 지 얼마 안되서..  동네 술 친구 구하고 있어요~~",
  replyLevel: 0,
};

export const DepthOne = Template.bind({});
DepthOne.args = {
  avartarSrc: "./profile-anonymous.png",
  username: "혼술최고야",
  createdAt: "4시간 전",
  location: "수색동",
  replyContent: "반갑습니다~",
  replyLevel: 1,
};
