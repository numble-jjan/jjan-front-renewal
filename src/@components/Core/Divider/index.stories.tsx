import React from "react";
import Divider from "./index";
import type { Meta, StoryObj } from "@storybook/react";

import { colorMap } from "@/styles/theme";

export default {
  title: "Core/Divider",
  component: Divider,
  argTypes: {
    color: { control: "select", options: Object.keys(colorMap) },
  },
} as Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    color: "purple",
  },
  render: args => <Divider {...args} />,
};
