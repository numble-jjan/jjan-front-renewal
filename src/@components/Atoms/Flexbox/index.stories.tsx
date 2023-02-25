import React from "react";
import styled from "styled-components";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { FlexBox } from "../Flexbox";

export default { title: "core/FlexBox", component: FlexBox } as ComponentMeta<
  typeof FlexBox
>;

const Item = styled.div`
  border: 1px solid black;
  padding: 12px;
  border-radius: 12px;
`;

export const Flex: ComponentStory<typeof FlexBox> = args => {
  return (
    <FlexBox {...args}>
      <FlexBox />
      <Item>Item1</Item>
      <Item>Item2</Item>
      <Item>Item3</Item>
      <Item>Item4</Item>
    </FlexBox>
  );
};
Flex.storyName = "Default";
Flex.args = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "normal",
};
