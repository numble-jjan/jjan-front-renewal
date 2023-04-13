import React from "react";
import NavIcon from "./index";
import Base from "@/@components/Core/Base";

import { within } from "@storybook/testing-library";

import { NAV_ICONS } from "@/constants/navIcons";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Navigation/NavIcon",
  component: NavIcon,
} as Meta<typeof NavIcon>;

type Story = StoryObj<typeof NavIcon>;

const [icon] = NAV_ICONS;

export const Default: Story = {
  args: {
    text: icon.text,
    isLast: false,
  },
  render: args => (
    <Base>
      <NavIcon
        {...args}
        activeIcon={icon.activeIcon}
        defaultIcon={icon.defaultIcon}
      ></NavIcon>
    </Base>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(args.text);
  },
};
