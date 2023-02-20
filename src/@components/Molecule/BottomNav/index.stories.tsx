import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BottomNav from "./index";

export default {
  title: "Molecule/BottomNav",
  component: BottomNav,
} as ComponentMeta<typeof BottomNav>;

const Template: ComponentStory<typeof BottomNav> = args => (
  <BottomNav {...args} />
);

export const Default = Template.bind({});
