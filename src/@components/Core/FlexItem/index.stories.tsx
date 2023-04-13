import React from "react";
import FlexBox from "../Flexbox";
import FlexItem from "./index";
import Text from "../Text";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Core/FlexItem",
  component: FlexItem,
} as Meta<typeof FlexItem>;

type Story = StoryObj<typeof FlexItem>;

export const WithinFlexBox: Story = {
  render: () => {
    return (
      <FlexBox>
        <FlexItem>
          <Text variant="f5-regular">Item1</Text>
        </FlexItem>
        <FlexItem flex={1}>
          <Text variant="f5-regular">Item1</Text>
        </FlexItem>
        <FlexItem flex={2}>
          <Text variant="f5-regular">Item1</Text>
        </FlexItem>
        <FlexItem flex={3}>
          <Text variant="f5-regular">Item1</Text>
        </FlexItem>
      </FlexBox>
    );
  },
};
