import { Children, isValidElement } from "react";
import type { ReactNode } from "react";

export default function getComponentByType(
  children: ReactNode,
  type: any,
  num?: number,
) {
  if (num === undefined) num = 0;
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(child => isValidElement(child) && child.type === type)
    .slice(0, num + 1);
}
