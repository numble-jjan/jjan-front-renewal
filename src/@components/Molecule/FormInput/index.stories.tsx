import React from "react";

import FormInput from ".";

import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Molecule/FormInput",
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

export const WithoutButton = () => (
  <FormInput>
    <FormInput.Label text="이메일" isRequired={true} />
    <FormInput.Input shape="border" placeholder="이메일 주소" />
    <FormInput.FeedBackMessage
      isValid={false}
      errorMessage="이메일 주소를 다시 확인해주세요."
    />
  </FormInput>
);

export const WithButton = () => (
  <FormInput>
    <FormInput.Label text="닉네임" isRequired={true} />
    <FormInput.InputWithButton>
      <FormInput.InputWithButton.Input placeholder="닉네임 입력" />
      <FormInput.InputWithButton.Button text="중복확인" />
    </FormInput.InputWithButton>
    <FormInput.FeedBackMessage />
  </FormInput>
);
