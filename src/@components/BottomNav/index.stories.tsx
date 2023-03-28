import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import BottomNav from "./index";

export default {
  title: "BottomNav/BottomNav",
  component: BottomNav,
} as ComponentMeta<typeof BottomNav>;

export const Default = () => {
  return <BottomNav />;
};
