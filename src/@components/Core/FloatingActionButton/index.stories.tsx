import React from "react";
import FloatingActionButton from "./index";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReactComponent as WriteIcon } from "@/assets/icons/icon-write.svg";
import { ReactComponent as UpIcon } from "@/assets/icons/icon-up.svg";

export default {
  title: "Core/FloatingActionButton",
  component: FloatingActionButton,
} as ComponentMeta<typeof FloatingActionButton>;

export const Small: ComponentStory<typeof FloatingActionButton> = args => (
  <FloatingActionButton {...args} variant="small" />
);
Small.args = {
  element: UpIcon,
};

export const Medium: ComponentStory<typeof FloatingActionButton> = args => (
  <FloatingActionButton {...args} variant="medium" />
);
Medium.args = {
  element: WriteIcon,
};
