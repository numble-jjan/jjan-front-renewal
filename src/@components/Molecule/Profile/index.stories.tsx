import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Profile from "./index";

export default {
  title: "Molecule/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = args => (
  <Profile {...args}>
    <Profile.Avartar src="./profile-anonymous.png" size={"profile"} />
    <Profile.Name text="username" />
    <Profile.Sub text="서울 역삼 1동"></Profile.Sub>
    <Profile.Info>인포메이션</Profile.Info>
  </Profile>
);

export const Default = Template.bind({});
