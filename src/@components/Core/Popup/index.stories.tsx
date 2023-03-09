import React from "react";
import Popup from "./index";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Core/Popup",
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = args => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Text",
};
