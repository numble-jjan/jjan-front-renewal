import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Navigation from "./index";
import { colorMap, font } from "@/styles/theme";

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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const profileIcon = canvas.getByText("프로필");
    await step("일반 아이콘 클릭 이벤트 시 변화", async () => {
      await expect(profileIcon).toHaveStyle(`color:${colorMap.black}`);
      await userEvent.click(profileIcon);
      await expect(profileIcon).toHaveStyle(`color:${colorMap.purple}`);
    });

    const communityIcon = canvas.getByText("커뮤니티");
    await step("마지막 아이콘 클릭 이벤트 시 변화", async () => {
      await expect(communityIcon).toHaveStyle(`color:${colorMap.white}`);
      await userEvent.click(communityIcon);
      await expect(communityIcon).toHaveStyle(
        `font-weight:${font.weight.bold}`,
      );
    });
  },
};
