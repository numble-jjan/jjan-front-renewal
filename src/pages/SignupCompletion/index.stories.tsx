import React from "react";
import SignUpCompletion from "./index";
import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/SignupCompletion",
  component: SignUpCompletion,
} as ComponentMeta<typeof SignUpCompletion>;

export const Default = () => <SignUpCompletion></SignUpCompletion>;
