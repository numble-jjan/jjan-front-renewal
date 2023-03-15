import React from "react";
import ReplyInput from "./index";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "ReplyInput / ReplyInput",
  component: ReplyInput,
} as ComponentMeta<typeof ReplyInput>;

export const Default: ComponentStory<typeof ReplyInput> = args => {
  return <ReplyInput {...args} />;
};
