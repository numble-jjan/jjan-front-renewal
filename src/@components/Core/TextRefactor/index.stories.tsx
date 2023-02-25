import React from "react";
import Text from "./index";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import textVariantMap from "@/styles/textVariant";

export default {
  title: "Core/Text",
  component: Text,
  argTypes: {
    variant: { control: "select", options: Object.keys(textVariantMap) },
  },
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = args => {
  return <Text {...args} />;
};
Default.args = {
  variant: "f4-bold",
  children: "테스트용 텍스트입니다.",
};
