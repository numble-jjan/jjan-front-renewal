import React from "react";
import Textarea from "./index";
import Base from "../Base";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Core/Textarea",
  component: Textarea,
  argTypes: {
    rows: {
      control: "number",
    },
  },
} as Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    rows: 3,
  },
  render: args => <Textarea {...args} />,
};

export const Wrapped: Story = {
  args: {
    rows: 3,
  },
  render: args => (
    <Base height="100px" border="1px solid black">
      <Textarea {...args} />
    </Base>
  ),
};
