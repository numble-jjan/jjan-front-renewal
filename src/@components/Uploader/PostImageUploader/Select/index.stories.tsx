import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "./index";

export default {
  title: "Uploader/PostImageUploader/Post/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Default = Template.bind({});
