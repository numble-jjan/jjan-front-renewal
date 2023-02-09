import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import LikesAndComments from "./index";

export default {
  title: "Molecule/LikesAndComments",
  component: LikesAndComments,
  argTypes: {},
} as ComponentMeta<typeof LikesAndComments>;

const Template: ComponentStory<typeof LikesAndComments> = args => (
  <LikesAndComments {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onClickLike: () => {
    return;
  },
  onClickComment: () => {
    return;
  },
  likeCount: 30,
  commentCount: 30,
  isLike: true,
};
