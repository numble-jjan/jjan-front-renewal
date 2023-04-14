import React from "react";
import styled from "styled-components";
import type { Meta, StoryObj } from "@storybook/react";

import FlexBox from "./index";

export default { title: "core/FlexBox", component: FlexBox } as Meta<
  typeof FlexBox
>;

type Story = StoryObj<typeof FlexBox>;

const Item = styled.div`
  border: 1px solid black;
  padding: 12px;
  border-radius: 12px;
`;

export const Default: Story = {
  args: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "normal",
  },
  render: args => {
    return (
      <FlexBox {...args}>
        <Item>Item1</Item>
        <Item>Item2</Item>
        <Item>Item3</Item>
        <Item>Item4</Item>
      </FlexBox>
    );
  },
};
