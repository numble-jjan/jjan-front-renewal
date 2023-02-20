import type { ImageSize } from "./avartar";

export type ProfileFormat = "profile" | "author" | "comment";

type ProfileStyle = { imgPadding: string } & ImageSize;

export type ProfileStyles = {
  [key in ProfileFormat]: ProfileStyle;
};
