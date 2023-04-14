import React from "react";
import Button from "./index";
import { buttonVariant, buttonHeight } from "./index.styles";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Core/Button",
  component: Button,
  argTypes: {
    height: { control: "radio", options: Object.keys(buttonHeight) },
    variant: { control: "select", options: Object.keys(buttonVariant) },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "purple",
    height: "l",
    children: "Button",
  },
  render: args => <Button {...args} />,
};
