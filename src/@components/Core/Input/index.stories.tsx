import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./index";

// import { ICON_1, ICON_2 } from "@/constants/icons"

import { IconBrokenHome, IconBrokenLocationPurple } from "jjan-icon";

const icons = {
  Empty: null,
  ICON_1: IconBrokenHome,
  ICON_2: IconBrokenLocationPurple,
};

export default {
  title: "Core/Input",
  component: Input,
  argTypes: {
    shape: {
      control: "radio",
      options: ["border", "bottomLine"],
    },
    isValid: {
      control: "boolean",
    },
    left: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "radio",
        labels: {
          ICON_1: "ICON_1",
          ICON_2: "ICON_2",
        },
      },
    },
    right: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "radio",
        labels: {
          ICON_1: "ICON_1",
          ICON_2: "ICON_2",
        },
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  isValid: true,
  placeholder: "Placeholder",
  // left: <IconBrokenHome />,
};
