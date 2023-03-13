import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Preview from "./index";

const IMG_SAMPLES = {
  sample1: "./img-character.png",
  sample2: "./img-numble-logo.jpg",
  sample3: "./img-avartar-sample-1.jpeg",
  sample4: "./img-avartar-sample-2.jpeg",
  sample5: "./img-avartar-sample-3.jpg",
  error: "",
};

export default {
  title: "Uploader/PostImageUploader/Post/Preview",
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = args => <Preview {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: IMG_SAMPLES.sample1,
};
