import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Navigation from "./index";
import { colorMap } from "@/styles/theme";

import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Navigation/Navigation",
  component: Navigation,
} as Meta<typeof Navigation>;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  render: () => {
    return <Navigation />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const profileIcon = canvas.getByText("프로필");

    await expect(profileIcon).toHaveStyle(`color:${colorMap.black}`);
    await userEvent.click(profileIcon);
    await expect(profileIcon).toHaveStyle(`color:${colorMap.purple}`);
  },
};
