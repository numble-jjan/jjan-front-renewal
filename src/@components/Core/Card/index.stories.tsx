import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Card from "./index";
import DetailLink from "@/@components/Molecule/DetailLink";

export default {
  title: "Core/Card",
  component: Card,
  argTypes: {},
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <h1>Test Text</h1>,
  },
  render: args => <Card {...args}></Card>,
};

export const WithDetailLink: Story = {
  args: {
    children: (
      <DetailLink>
        <h1>Test Text</h1>
      </DetailLink>
    ),
  },
  render: args => <Card {...args}></Card>,
};
