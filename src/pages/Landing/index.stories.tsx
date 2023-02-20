import React from "react";
import Landing from "./index";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default { title: "Pages/Landing" } as ComponentMeta<typeof Landing>;

const Template: ComponentStory<typeof Landing> = args => <Landing {...args} />;

export const Default = Template.bind({});
