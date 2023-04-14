import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import AvatarUploader from "./index";

export default {
  title: "Uploader/AvatarUploader",
  component: AvatarUploader,
} as Meta<typeof AvatarUploader>;

type Story = StoryObj;

export const Default: Story = {
  render: () => <AvatarUploader />,
};
