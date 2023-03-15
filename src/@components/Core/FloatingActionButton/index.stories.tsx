import React from "react";
import FloatingActionButton from "./index";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReactComponent as WriteIcon } from "@/assets/icons/icon-write.svg";
import { ReactComponent as UpIcon } from "@/assets/icons/icon-up.svg";

const IconMap = {
  writeIcon: WriteIcon,
  upIcon: UpIcon,
};

export default {
  title: "Core/FloatingActionButton",
  component: FloatingActionButton,
  argTypes: {
    element: {
      control: "select",
      options: Object.keys(IconMap),
      mapping: IconMap,
    },
  },
} as ComponentMeta<typeof FloatingActionButton>;

export const Default: ComponentStory<typeof FloatingActionButton> = args => (
  <FloatingActionButton {...args} />
);

export const Small: ComponentStory<typeof FloatingActionButton> = args => (
  <FloatingActionButton {...args} variant="small" />
);

export const Medium: ComponentStory<typeof FloatingActionButton> = args => (
  <FloatingActionButton {...args} variant="medium" />
);
Medium.args = {
  element: WriteIcon,
};
