import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ScrollBar from "./index";
import Dummy from "./Dummy";

export default {
  title: "ScrollBar/ScrollBar",
  component: ScrollBar,
} as ComponentMeta<typeof ScrollBar>;

const Template: ComponentStory<typeof ScrollBar> = args => (
  <div style={{ height: "800px" }}>
    <ScrollBar {...args}>
      <Dummy />
    </ScrollBar>
  </div>
);

export const Primary = Template.bind({});
