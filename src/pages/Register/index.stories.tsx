import React from "react";
import Register from "./index";
import type { ComponentMeta } from "@storybook/react";

import { RecoilRoot } from "recoil";

export default {
  title: "Pages/Register",
  component: Register,
  decorators: [
    Story => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof Register>;

export const Default = () => <Register></Register>;
