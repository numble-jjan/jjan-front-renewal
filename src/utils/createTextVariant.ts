import { font } from "@/styles/theme";

import type { Variant, Variants } from "@/types/textVariant";
import type { Size, SizeKey, Weight, WeightKey } from "@/types/font";

const { size, weight } = font;

export const createTextVariants = (fontSizes: Size, fontWeights: Weight) => {
  const variants = {} as Variants;

  const sizeKeys = Object.keys(fontSizes) as SizeKey[];
  const weightKeys = Object.keys(fontWeights) as WeightKey[];

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
