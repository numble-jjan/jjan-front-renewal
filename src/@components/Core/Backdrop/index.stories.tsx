import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Backdrop from "./index";

export default {
  title: "Core/Backdrop",
  component: Backdrop,
  argTypes: {},
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = args => (
  <Backdrop {...args} />
);

export const Default = Template.bind({});
