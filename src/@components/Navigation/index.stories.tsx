import React from "react";
import type { ComponentMeta } from "@storybook/react";

import Navigation from "./index";

export default {
  title: "Navigation/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

export const Default = () => {
  return <Navigation />;
};
