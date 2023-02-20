import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FormInput from "./index";

export default {
  title: "Molecule/FormInput",
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = args => (
  <FormInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "이메일",
  isValid: false,
  shape: "border",
  errorMessage: "이메일 주소를 다시 확인해주세요",
  required: true,
};
