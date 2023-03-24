import React from "react";
import Header from "./index";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Header/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = args => {
  return <Header {...args} />;
};
Default.args = {
  title: "Sample",
};
