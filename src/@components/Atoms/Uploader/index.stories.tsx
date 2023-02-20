import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Uploader from "./index";
import Avartar from "../Avatar";

export default {
  title: "Atoms/Uploader",
  component: Uploader,
} as ComponentMeta<typeof Uploader>;

const Template: ComponentStory<typeof Uploader> = args => (
  <Uploader
    {...args}
    imageComponent={<Avartar src="./profile-anonymous.png" size="profile" />}
  />
);

export const Default = Template.bind({});
