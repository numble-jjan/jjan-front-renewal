import React from "react";
import Text from "./index";
import textVariantMap from "@/styles/textVariant";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Core/Text",
  component: Text,
  argTypes: {
    variant: { control: "select", options: Object.keys(textVariantMap) },
  },
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    variant: "f4-bold",
    children: "테스트용 텍스트입니다.",
  },
  render: args => {
    return <Text {...args} />;
  },
};
