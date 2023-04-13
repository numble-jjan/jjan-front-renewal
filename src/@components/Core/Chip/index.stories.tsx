import React from "react";
import Chip from "./index";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Core/Chip",
  component: Chip,
} as Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

const mockingEventHandler = () => null;

export const Default: Story = {
  args: {
    onClickDelete: mockingEventHandler,
    text: "text",
  },
  render: args => <Chip {...args}></Chip>,
};

export const WithCancellation: Story = {
  args: {
    onClickDelete: mockingEventHandler,
    text: "text",
  },
  render: args => <Chip {...args}></Chip>,
};
