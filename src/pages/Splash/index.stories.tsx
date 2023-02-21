/**
 * 굳이 스토리를 만들어야할까?
 * 어차피 페이지는 npm run start로 충분히 보는 게 가능할 것 같은데
 * 또 그걸 위해서 Splash에서 불필요한 props를 받게끔 하는 건 별로일 것 같기도 하다.
 */

import React from "react";
import Splash from "./index";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/Splash",
  component: Splash,
} as ComponentMeta<typeof Splash>;

const Template: ComponentStory<typeof Splash> = args => <Splash {...args} />;

export const Default = Template.bind({});
