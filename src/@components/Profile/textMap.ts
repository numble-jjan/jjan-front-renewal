import type { Variant } from "@/types/textVariant";
import type { ProfileVariant } from "./types";

type FormatToVariant = {
  [key in ProfileVariant]: Variant;
};

export const MAIN_INFO: FormatToVariant = {
  profile: "f2-bold",
  author: "f4-regular",
  comment: "f4-regular",
};

export const SUB_INFO: FormatToVariant = {
  profile: "f4-regular",
  author: "f5-regular",
  comment: "f5-regular",
};
