import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AvatarUploader from "./index";

export default {
  title: "Uploader/AvatarUploader",
  component: AvatarUploader,
} as ComponentMeta<typeof AvatarUploader>;

const Template: ComponentStory<typeof AvatarUploader> = () => (
  <AvatarUploader />
);

export const Default = Template.bind({});
