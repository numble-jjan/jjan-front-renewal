import React from "react";
import Avartar from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const IMG_SAMPLES = {
  sample1: "./img-character.png",
  sample2: "./img-numble-logo.jpg",
  sample3: "./img-avartar-sample-1.jpeg",
  sample4: "./img-avartar-sample-2.jpeg",
  sample5: "./img-avartar-sample-3.jpg",
  error: "",
};

export default {
  title: "Core/Avartar",
  component: Avartar,
  argTypes: {
    src: {
      control: "select",
      options: Object.keys(IMG_SAMPLES),
      mapping: IMG_SAMPLES,
    },
  },
} as ComponentMeta<typeof Avartar>;

export const Comment: ComponentStory<typeof Avartar> = ({ ...args }) => {
  return <Avartar {...args} variant="comment"></Avartar>;
};
Comment.args = {
  src: IMG_SAMPLES.sample1,
};

export const Author: ComponentStory<typeof Avartar> = ({ ...args }) => {
  return <Avartar {...args} variant="author"></Avartar>;
};
Author.args = {
  src: IMG_SAMPLES.sample1,
};

export const Profile: ComponentStory<typeof Avartar> = ({ ...args }) => {
  return <Avartar {...args} variant="profile"></Avartar>;
};
Profile.args = {
  src: IMG_SAMPLES.sample1,
};

export const Setting: ComponentStory<typeof Avartar> = ({ ...args }) => {
  return <Avartar {...args} variant="setting"></Avartar>;
};
Setting.args = {
  src: IMG_SAMPLES.sample1,
};

export const Error: ComponentStory<typeof Avartar> = ({ ...args }) => {
  return <Avartar {...args}></Avartar>;
};
Error.args = {
  variant: "comment",
  src: "",
};
