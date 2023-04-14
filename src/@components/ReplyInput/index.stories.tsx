import React from "react";
import ReplyInput from "./index";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "ReplyInput/ReplyInput",
  component: ReplyInput,
} as Meta<typeof ReplyInput>;

type Story = StoryObj<typeof ReplyInput>;

export const Default: Story = {
  render: args => {
    return <ReplyInput {...args} />;
  },
};
