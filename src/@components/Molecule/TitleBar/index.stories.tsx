import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TitleBar from "./index";

export default {
  title: "Molecule/TitleBar",
  component: TitleBar,
} as ComponentMeta<typeof TitleBar>;

const Template: ComponentStory<typeof TitleBar> = args => (
  <TitleBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: "회원정보",
  required: true,
};
