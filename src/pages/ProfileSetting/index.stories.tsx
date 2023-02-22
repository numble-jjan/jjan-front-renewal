import React from "react";

import ProfileSetting from "./index";

import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/ProfileSetting",
  component: ProfileSetting,
} as ComponentMeta<typeof ProfileSetting>;

export const Default = () => <ProfileSetting />;
