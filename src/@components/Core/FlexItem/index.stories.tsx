import React from "react";
import { FlexBox } from "../Flexbox";
import FlexItem from "./index";
import Text from "../Text";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Core/FlexItem",
  component: FlexItem,
} as ComponentMeta<typeof FlexItem>;

export const WithinFlexBox: ComponentStory<typeof FlexItem> = () => {
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
};
