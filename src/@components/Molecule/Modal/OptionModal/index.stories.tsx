import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OptionModal from "./index";

export default {
  title: "Molecule/Modal/OptionModal",
  component: OptionModal,
} as ComponentMeta<typeof OptionModal>;

const Template: ComponentStory<typeof OptionModal> = args => (
  <OptionModal {...args} />
);

export const Default = Template.bind({});
