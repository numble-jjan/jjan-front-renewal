import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./index";

export default {
  title: "Atoms/Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

const H1 = <h1>Test Text</h1>;

export const Default = Template.bind({});
Default.args = {
  children: H1,
};
