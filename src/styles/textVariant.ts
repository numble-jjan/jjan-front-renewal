import { font } from "@/styles/theme";

import type { Variant, Variants } from "@/types/textVariant";
import type { FontSize, FontWeight } from "@/styles/theme";

const { size, weight } = font;

type FontSizeKey = keyof FontSize;
type FontWeightKey = keyof FontWeight;

const createTextVariants = (fontSizes: FontSize, fontWeights: FontWeight) => {
  const variants = {} as Variants;

  const sizeKeys = Object.keys(fontSizes) as FontSizeKey[];
  const weightKeys = Object.keys(fontWeights) as FontWeightKey[];

  sizeKeys.forEach(sizeKey => {
    weightKeys.forEach(weightKey => {
      const key: Variant = `${sizeKey}-${weightKey}`;
      variants[key] = {
        fontSize: size[sizeKey],
        fontWeight: weight[weightKey],
      };
    });
  });

  return variants;
};

export type TextVariant =
  | "f1-regular"
  | "f1-bold"
  | "f2-regular"
  | "f2-bold"
  | "f3-regular"
  | "f3-bold"
  | "f4-regular"
  | "f4-bold"
  | "f5-regular"
  | "f5-bold"
  | "f6-regular"
  | "f6-bold"
  | "f7-regular"
  | "f7-bold";

export type TextVariants = {
  [key in TextVariant]: { fontSize: string; fontWeight: string };
};

const textVariantMap = createTextVariants(font.size, font.weight);
export default textVariantMap;
