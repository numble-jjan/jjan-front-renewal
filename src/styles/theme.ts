import type { AvartarSize } from "@/types/image";
import type { ProfileStyles } from "@/types/profile";

export const color = {
  purple: "#683CED",
  light_purple: "#925CE9",
  orange: "#F58229",
  light_gray1: "#DDDDDD",
  light_gray2: "#EEEEEE",
  light_gray3: "#F9F9F9",
  light_gray4: "#D9D9D9",
  gray: "#666666",
  dark_gray: "#999999",
  black: "#000000",
  white: "#FFFFFF",
};

export const colorMap = {
  purple: "#683CED",
  light_purple: "#925CE9",
  orange: "#F58229",
  light_gray1: "#DDDDDD",
  light_gray2: "#EEEEEE",
  light_gray3: "#F9F9F9",
  light_gray4: "#D9D9D9",
  gray: "#666666",
  dark_gray: "#999999",
  black: "#000000",
  white: "#FFFFFF",
};
export type Color = keyof typeof color;

export const font = {
  size: {
    f7: "10px",
    f6: "11px",
    f5: "12px",
    f4: "13px",
    f3: "14px",
    f2: "16px",
    f1: "18px",
  },
  weight: {
    regular: "400",
    bold: "700",
  },
};
export type FontSize = typeof font.size;
export type FontWeight = typeof font.weight;

export const btn_board_active = {
  backgroundColor: "transparent",
  height: "50px",
  borderBottom: `1px solid ${color.purple}`,
};

export const btn_board_inactive = {
  backgroundColor: "transparent",
  height: "50px",
};

export const avartarSize: AvartarSize = {
  setting: {
    height: "75px",
    width: "75px",
  },
  profile: {
    height: "60px",
    width: "60px",
  },
  author: {
    height: "50px",
    width: "50px",
  },
  comment: { height: "40px", width: "40px" },
};

export type ProfileFormat = "profile" | "author" | "comment";

export const profileStyles: ProfileStyles = {
  profile: { imgPadding: "16px", ...avartarSize.profile },
  author: { imgPadding: "11px", ...avartarSize.author },
  comment: { imgPadding: "11px", ...avartarSize.comment },
};

export const buttonHeight = {
  xs: "27px",
  m: "40px",
  l: "50px",
};
