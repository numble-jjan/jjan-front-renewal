import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Uploader from "./index";

export default {
  title: "Atoms/Uploader",
  component: Uploader,
} as ComponentMeta<typeof Uploader>;

const Template: ComponentStory<typeof Uploader> = args => (
  <Uploader {...args} />
);

export const Default = Template.bind({});
