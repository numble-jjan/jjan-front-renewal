import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./index";
import DetailLink from "@/@components/Molecule/DetailLink";

export default {
  title: "Atoms/Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <h1>Test Text</h1>,
};

export const WithDetailLink = Template.bind({});
WithDetailLink.args = {
  children: (
    <DetailLink>
      <h1>Test Text</h1>
    </DetailLink>
  ),
};
