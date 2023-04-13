import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ImageSelectButton from "./index";

export default {
  title: "Uploader/PostImageUploader/Post/ImageSelectButton",
  component: ImageSelectButton,
} as Meta<typeof ImageSelectButton>;

type Story = StoryObj<typeof ImageSelectButton>;

export const Default: Story = {
  render: args => <ImageSelectButton {...args} />,
};
