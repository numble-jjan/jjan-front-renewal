import React from "react";
import Textarea from "./index";
import Base from "../Base";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default { title: "Core/Textarea", component: Textarea } as ComponentMeta<
  typeof Textarea
>;

export const Deafult: ComponentStory<typeof Textarea> = args => (
  <Textarea {...args} />
);

export const Wrapped: ComponentStory<typeof Textarea> = args => (
  <Base height="100px" border="1px solid black">
    <Textarea {...args} />
  </Base>
);
