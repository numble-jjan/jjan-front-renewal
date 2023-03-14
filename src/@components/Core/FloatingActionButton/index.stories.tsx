import React from "react";
import FloatingActionButton from "./index";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Core/FloatingActionButton",
  component: FloatingActionButton,
  args: {
    top: "100%",
    left: "100%",
  },
} as ComponentMeta<typeof FloatingActionButton>;

export const Small: ComponentStory<typeof FloatingActionButton> = args => (
  <FloatingActionButton {...args} variant="small" />
);
export const Medium: ComponentStory<typeof FloatingActionButton> = args => (
  <FloatingActionButton {...args} variant="medium" />
);
