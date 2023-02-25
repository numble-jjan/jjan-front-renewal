import React from "react";
import Base from "./index";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Core/Base",
  component: Base,
} as ComponentMeta<typeof Base>;

export const Default: ComponentStory<typeof Base> = args => {
  return <Base {...args}>TEXT</Base>;
};
Default.args = {
  backgroundColor: "purple",
  borderRadius: 10,
  border: "1px solid black",
  padding: "10px",
};
