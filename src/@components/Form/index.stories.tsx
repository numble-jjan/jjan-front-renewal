import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import FlexBox from "../Core/Flexbox";
import Label from "../Molecule/FormInput/Label";
import Form from "./";

import { signupScheme } from "../../validation/scheme";
import { yupResolver } from "@/utils/yupResolver";

type SignupForm = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const initialValues = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

export default {
  title: "Form/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

export const Default: ComponentStory<typeof Form> = () => {
  /* eslint-disable*/
  const handleSubmit = (values: SignupForm) => console.log(values);

  return (
    <Form<SignupForm>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      resolver={yupResolver(signupScheme)}
    >
      <FlexBox flexDirection="column" gap={"15px"}>
        <FlexBox flexDirection="column" gap={"5px"}>
          <Form.Label text="이메일" isRequired />
          <Form.InputField type="text" name="email" />
          <Form.ErrorMessage name="email" />
        </FlexBox>
        <FlexBox flexDirection="column" gap={"5px"}>
          <Form.Label text="비밀번호" isRequired />
          <Form.InputField type="password" name="password" />
          <Form.ErrorMessage name="password" />
        </FlexBox>
        <FlexBox flexDirection="column" gap={"5px"}>
          <Label text="비밀번호 확인" isRequired />
          <Form.InputField type="password" name="passwordConfirmation" />
          <Form.ErrorMessage name="passwordConfirmation" />
        </FlexBox>
        <button type="submit">login</button>
      </FlexBox>
    </Form>
  );
};
