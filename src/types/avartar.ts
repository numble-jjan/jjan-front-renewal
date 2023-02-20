export type ImageSize = { height: string; width: string };
export type AvartarFormat = "setting" | "profile" | "author" | "comment";
export type AvartarSize = {
  [key in AvartarFormat]: ImageSize;
};
