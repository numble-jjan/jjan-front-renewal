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
}
type NavIcons = NavIcon[];

export const NAV_ICONS: NavIcons = [
  {
    text: "프로필",
    defaultIcon: <IconBrokenUser />,
    activeIcon: <IconBrokenUserPurple />,
  },
  {
    text: "추천 술집",
    defaultIcon: <IconBrokenLocation />,
    activeIcon: <IconBrokenLocationPurple />,
  },
  {
    text: "홈",
    defaultIcon: <IconBrokenHome />,
    activeIcon: <IconBrokenHomePurple />,
  },
  {
    text: "술정보",
    defaultIcon: <IconBrokenText />,
    activeIcon: <IconBrokenTextPurple />,
  },
  {
    text: "커뮤니티",
    defaultIcon: <IconBrokenUsersMore />,
    activeIcon: <IconBrokenUsersMoreBold />,
  },
];
