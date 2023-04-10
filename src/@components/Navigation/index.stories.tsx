import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Base from "../Core/Base";
import Navigation from "./index";
import NavIcon from "./NavIcon";
import { NAV_ICONS } from "@/constants/navIcons";

export default {
  title: "Navigation/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

export const Default = () => {
  return <Navigation />;
};

const [firstNavItem] = NAV_ICONS;
const { activeIcon, defaultIcon, text } = firstNavItem;
export const OneIcon: ComponentStory<typeof NavIcon> = props => {
  return (
    <Base position="relative">
      <NavIcon {...props} defaultIcon={defaultIcon} activeIcon={activeIcon} />
    </Base>
  );
};
OneIcon.args = {
  text,
  isClicked: false,
  isLast: false,
};
