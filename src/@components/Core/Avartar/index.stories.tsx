import React from "react";
import Avartar from "./index";
import { Meta, StoryObj } from "@storybook/react";

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
} as Meta<typeof Avartar>;
type Story = StoryObj<typeof Avartar>;

export const Comment: Story = {
  args: {
    src: IMG_SAMPLES.sample1,
  },
  render: args => {
    return <Avartar {...args} variant="comment"></Avartar>;
  },
};

export const Author: Story = {
  args: {
    src: IMG_SAMPLES.sample1,
  },
  render: args => {
    return <Avartar {...args} variant="author"></Avartar>;
  },
};

export const Profile: Story = {
  args: {
    src: IMG_SAMPLES.sample1,
  },
  render: args => {
    return <Avartar {...args} variant="profile"></Avartar>;
  },
};

export const Setting: Story = {
  args: {
    src: IMG_SAMPLES.sample1,
  },
  render: args => {
    return <Avartar {...args} variant="setting"></Avartar>;
  },
};

export const Error: Story = {
  args: {
    variant: "comment",
    src: "",
  },
  render: args => {
    return <Avartar {...args} variant="author"></Avartar>;
  },
};
