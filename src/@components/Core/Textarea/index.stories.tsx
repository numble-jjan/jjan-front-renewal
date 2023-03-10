import React from "react";
import Textarea from "./index";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default { title: "Core/Textarea", component: Textarea } as ComponentMeta<
  typeof Textarea
>;

export const Deafult: ComponentStory<typeof Textarea> = args => (
  <Textarea {...args} />
);
