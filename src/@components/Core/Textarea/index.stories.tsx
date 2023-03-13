import React from "react";
import Textarea from "./index";
import Base from "../Base";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Core/Textarea",
  component: Textarea,
  argTypes: {
    rows: {
      control: "number",
    },
  },
} as ComponentMeta<typeof Textarea>;

export const Default: ComponentStory<typeof Textarea> = args => (
  <Textarea {...args} />
);
Default.args = {
  rows: 3,
};

export const Wrapped: ComponentStory<typeof Textarea> = args => (
  <Base height="100px" border="1px solid black">
    <Textarea {...args} />
  </Base>
);
Wrapped.args = {
  rows: 3,
};
