import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Backdrop from "./index";

export default {
  title: "Core/Backdrop",
  component: Backdrop,
  argTypes: {},
} as Meta<typeof Backdrop>;

type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  render: args => {
    return <Backdrop {...args}></Backdrop>;
  },
};
