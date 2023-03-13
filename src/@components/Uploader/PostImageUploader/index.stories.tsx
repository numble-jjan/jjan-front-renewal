import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostImageUploader from "./index";

export default {
  title: "Uploader/PostImageUploader",
  component: PostImageUploader,
} as ComponentMeta<typeof PostImageUploader>;

const Template: ComponentStory<typeof PostImageUploader> = () => (
  <PostImageUploader />
);

export const Default = Template.bind({});
