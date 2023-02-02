import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./index";

import { color, font } from "../../../styles/theme";

export default {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
    color: { control: "select", options: Object.values(color) },
    fontSize: { control: "select", options: Object.values(font.size) },
    fontWeight: { control: "select", options: Object.values(font.weight) },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Text",
};
