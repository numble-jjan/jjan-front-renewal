/* eslint-disable @typescript-eslint/no-empty-function */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConfirmModal from "./index";

export default {
  title: "Molecule/Modal/ConfirmModal",
  component: ConfirmModal,
  argTypes: {},
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = args => (
  <ConfirmModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: "Test Alert Message",
  onConfirm: () => {},
  onCancle: () => {},
};
