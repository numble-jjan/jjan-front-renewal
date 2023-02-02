import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: "m",
  shape: "purple",
  text: "Button",
};
