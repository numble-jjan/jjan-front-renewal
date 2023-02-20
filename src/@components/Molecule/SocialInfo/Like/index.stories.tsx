import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Like from "./index";

export default {
  title: "Molecule/SocialInfo/Like",
  component: Like,
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = args => <Like {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 30,
};
