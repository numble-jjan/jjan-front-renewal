import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import DetailLink from "./index";

export default {
  title: "Molecule/DetailLink",
  component: DetailLink,
  argTypes: {},
} as ComponentMeta<typeof DetailLink>;

const Template: ComponentStory<typeof DetailLink> = args => (
  <DetailLink {...args} />
);

const H1 = <h1>Test Text</h1>;

export const Default = Template.bind({});
Default.args = {
  children: H1,
};
