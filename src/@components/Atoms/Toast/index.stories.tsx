import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toast from "./index";

export default {
  title: "Atoms/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = args => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Text",
};
