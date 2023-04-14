import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import PostImageUploader from "./index";

export default {
  title: "Uploader/PostImageUploader",
  component: PostImageUploader,
} as Meta<typeof PostImageUploader>;

type Story = StoryObj<typeof PostImageUploader>;

export const Default: Story = {
  render: () => <PostImageUploader />,
};
