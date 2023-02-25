import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Divider from "./index";

import { colorMap } from "@/styles/theme";

export default {
  title: "Core/Divider",
  component: Divider,
  argTypes: {
    color: { control: "select", options: Object.keys(colorMap) },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = args => <Divider {...args} />;

export const Default = Template.bind({});
