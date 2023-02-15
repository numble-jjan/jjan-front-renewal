import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import SocialInfo from "./index";

export default {
  title: "Molecule/SocialInfo",
  component: SocialInfo,
} as ComponentMeta<typeof SocialInfo>;

const Template: ComponentStory<typeof SocialInfo> = args => (
  <SocialInfo {...args}>
    <SocialInfo.Like count={30} isLike={true} />
    <SocialInfo.Comment count={244} />
  </SocialInfo>
);

export const Default = Template.bind({});
