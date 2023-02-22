import React from "react";

import InputWithButton from "./index";

import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Molecule/InputWithButton",
  component: InputWithButton,
} as ComponentMeta<typeof InputWithButton>;

export const With = () => (
  <InputWithButton>
    <InputWithButton.Input placeholder="sample placeholder" />
    <InputWithButton.Button text="submit" />
  </InputWithButton>
);
export const Without = () => (
  <InputWithButton>
    <InputWithButton.Input placeholder="without button sample" />
  </InputWithButton>
);
