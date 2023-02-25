import { font } from "@/styles/theme";

import type { Variant, Variants } from "@/types/textVariant";
import type { FontSize, FontWeight } from "@/styles/theme";

const { size, weight } = font;

type FontSizeKey = keyof FontSize;
type FontWeightKey = keyof FontWeight;

export const createTextVariants = (
  fontSizes: FontSize,
  fontWeights: FontWeight,
) => {
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

export const textVariants = createTextVariants(font.size, font.weight);
