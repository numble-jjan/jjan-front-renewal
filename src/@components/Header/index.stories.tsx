import React from "react";
import Header from "./index";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Header/Header",
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Sample",
  },
  render: args => {
    return <Header {...args} />;
  },
};
