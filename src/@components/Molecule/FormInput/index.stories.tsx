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

export const Error = Template.bind({});
Error.args = {
  label: "이메일",
  isValid: false,
  shape: "border",
  errorMessage: "이메일 주소를 다시 확인해주세요",
  isRequired: true,
};

export const Confirm = Template.bind({});
Confirm.args = {
  label: "닉네임",
  isValid: true,
  shape: "border",
  confirmMessage: "사용 가능한 닉네임입니다.",
  isTouched: true,
  isRequired: true,
};
