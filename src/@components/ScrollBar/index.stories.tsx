import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ScrollBar from "./index";
import Dummy from "./Dummy";

export default {
  title: "ScrollBar/ScrollBar",
  component: ScrollBar,
} as Meta<typeof ScrollBar>;

type Story = StoryObj<typeof ScrollBar>;

export const Default: Story = {
  render: args => (
    <div style={{ height: "800px" }}>
      <ScrollBar {...args}>
        <Dummy />
      </ScrollBar>
    </div>
  ),
};
