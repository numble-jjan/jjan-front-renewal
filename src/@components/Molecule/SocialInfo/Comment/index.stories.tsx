import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Comment from "./index";

export default {
  title: "Molecule/SocialInfo/Comment",
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 30,
};
