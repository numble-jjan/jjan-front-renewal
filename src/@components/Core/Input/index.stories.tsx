import React from "react";
import Input from "./index";
import { IconBrokenHome, IconBrokenLocationPurple } from "jjan-icon";
import type { Meta, StoryObj } from "@storybook/react";

const icons = {
  Empty: null,
  ICON_1: IconBrokenHome,
  ICON_2: IconBrokenLocationPurple,
};

export default {
  title: "Core/Input",
  component: Input,
  argTypes: {
    shape: {
      control: "radio",
      options: ["border", "bottomLine"],
    },
    isValid: {
      control: "boolean",
    },
    left: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "radio",
        labels: {
          ICON_1: "ICON_1",
          ICON_2: "ICON_2",
        },
      },
    },
    right: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "radio",
        labels: {
          ICON_1: "ICON_1",
          ICON_2: "ICON_2",
        },
      },
    },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    isValid: true,
    placeholder: "Placeholder",
  },
  render: args => <Input {...args} />,
};
