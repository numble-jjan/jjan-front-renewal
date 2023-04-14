import React from "react";
import FloatingActionButton from "./index";
import type { Meta, StoryObj } from "@storybook/react";

import { ReactComponent as WriteIcon } from "@/assets/icons/icon-write.svg";
import { ReactComponent as UpIcon } from "@/assets/icons/icon-up.svg";

const IconMap = {
  writeIcon: WriteIcon,
  upIcon: UpIcon,
};

export default {
  title: "Core/FloatingActionButton",
  component: FloatingActionButton,
  argTypes: {
    element: {
      control: "select",
      options: Object.keys(IconMap),
      mapping: IconMap,
    },
  },
} as Meta<typeof FloatingActionButton>;

type Story = StoryObj<typeof FloatingActionButton>;

export const Default: Story = {
  render: args => <FloatingActionButton {...args} />,
};

export const Small: Story = {
  render: args => <FloatingActionButton {...args} variant="small" />,
};

export const Medium: Story = {
  args: {
    element: WriteIcon,
  },
  render: args => <FloatingActionButton {...args} variant="medium" />,
};
