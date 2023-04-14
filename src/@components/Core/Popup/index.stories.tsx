import React from "react";
import Popup from "./index";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Core/Popup",
  component: Popup,
} as Meta<typeof Popup>;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {
    text: "Text",
  },
  render: args => <Popup {...args} />,
};
