import React from "react";
import Chip from "./index";
import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Core/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const mockingEventHandler = () => null;

export const Default = () => {
  return <Chip onClickDelete={mockingEventHandler} text="test" />;
};

export const WithCancellation = () => {
  return <Chip onClickDelete={mockingEventHandler} text="test" cacellation />;
};
