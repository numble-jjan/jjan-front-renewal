import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageSelectButton from "./index";

export default {
  title: "Uploader/PostImageUploader/Post/ImageSelectButton",
  component: ImageSelectButton,
} as ComponentMeta<typeof ImageSelectButton>;

const Template: ComponentStory<typeof ImageSelectButton> = args => (
  <ImageSelectButton {...args} />
);

export const Default = Template.bind({});
