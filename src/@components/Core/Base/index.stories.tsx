import React from "react";
import Base from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { colorMap } from "@/styles/theme";

export default {
  title: "Core/Base",
  component: Base,
  argTypes: {
    backgroundColor: { control: "select", options: Object.keys(colorMap) },
  },
} as Meta<typeof Base>;

type Story = StoryObj<typeof Base>;

export const Default: Story = {
  args: {
    backgroundColor: "purple",
    borderRadius: 10,
    border: "1px solid black",
    padding: "10px",
  },
  render: args => {
    return <Base {...args}>TEXT</Base>;
  },
};
