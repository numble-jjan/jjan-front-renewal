import { ReactComponent as Profile } from "@/assets/icons/icon-profile.svg";
import { ReactComponent as Location } from "@/assets/icons/icon-location.svg";
import { ReactComponent as Home } from "@/assets/icons/icon-home.svg";
import { ReactComponent as Info } from "@/assets/icons/icon-information.svg";
import { ReactComponent as Community } from "@/assets/icons/icon-community.svg";

import { ReactComponent as SelectedProfile } from "@/assets/icons/icon-selected-profile.svg";
import { ReactComponent as SelectedLocation } from "@/assets/icons/icon-selected-location.svg";
import { ReactComponent as SelectedHome } from "@/assets/icons/icon-selected-home.svg";
import { ReactComponent as SelectedInfo } from "@/assets/icons/icon-selected-information.svg";
import { ReactComponent as SelectedCommunity } from "@/assets/icons/icon-selected-community.svg";

export const BOTTOM_NAV_ITEMS = [
  {
    text: "프로필",
    icon: {
      unselected: Profile,
      selected: SelectedProfile,
    },
  },
  {
    text: "추천술집",
    icon: {
      unselected: Location,
      selected: SelectedLocation,
    },
  },
  {
    text: "홈",
    icon: {
      unselected: Home,
      selected: SelectedHome,
    },
  },
  {
    text: "술정보",
    icon: {
      unselected: Info,
      selected: SelectedInfo,
    },
  },
  {
    text: "커뮤니티",
    icon: {
      unselected: Community,
      selected: SelectedCommunity,
    },
  },
];
