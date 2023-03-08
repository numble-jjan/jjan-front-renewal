import React from "react";
import Button from "./index";
import { buttonVariant, buttonHeight } from "./index.styles";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Core/Button",
  component: Button,
  argTypes: {
    height: { control: "radio", options: Object.keys(buttonHeight) },
    variant: { control: "select", options: Object.keys(buttonVariant) },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);
Default.args = {
  variant: "purple",
  height: "l",
  children: "Button",
};
