import React from "react";
import Avartar from "./index";
import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Core/Avartar",
  component: Avartar,
} as ComponentMeta<typeof Avartar>;

const IMG_SAMPLE = "./img-character.png";

export const Author = () => {
  return <Avartar src={IMG_SAMPLE} variant="author" />;
};
export const Comment = () => {
  return <Avartar src={IMG_SAMPLE} variant="comment" />;
};
export const Profile = () => {
  return <Avartar src={IMG_SAMPLE} variant="profile" />;
};
export const Setting = () => {
  return <Avartar src={IMG_SAMPLE} variant="setting" />;
};
