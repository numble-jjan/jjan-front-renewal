import React, { ReactNode } from "react";

import {
  IconBrokenUser,
  IconBrokenLocation,
  IconBrokenHome,
  IconBrokenText,
  IconBrokenUsersMore,
  IconBrokenUserPurple,
  IconBrokenLocationPurple,
  IconBrokenHomePurple,
  IconBrokenTextPurple,
  IconBrokenUsersMoreBold,
} from "jjan-icon";

interface NavIcon {
  text: string;
  defaultIcon: ReactNode;
  activeIcon: ReactNode;
  isClicked: boolean;
}
type NavIcons = NavIcon[];

export const NAV_ICONS: NavIcons = [
  {
    text: "프로필",
    defaultIcon: <IconBrokenUser />,
    activeIcon: <IconBrokenUserPurple />,
    isClicked: false,
  },
  {
    text: "추천 술집",
    defaultIcon: <IconBrokenLocation />,
    activeIcon: <IconBrokenLocationPurple />,
    isClicked: false,
  },
  {
    text: "홈",
    defaultIcon: <IconBrokenHome />,
    activeIcon: <IconBrokenHomePurple />,
    isClicked: false,
  },
  {
    text: "술정보",
    defaultIcon: <IconBrokenText />,
    activeIcon: <IconBrokenTextPurple />,
    isClicked: false,
  },
  {
    text: "커뮤니티",
    defaultIcon: <IconBrokenUsersMore />,
    activeIcon: <IconBrokenUsersMoreBold />,
    isClicked: false,
  },
];
