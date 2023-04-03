import type { ReactNode } from "react";
import filterByType from "./filterByType";

export default function getComponentByType(
  children: ReactNode,
  type: any,
  num?: number,
) {
  if (num === undefined) num = 1;
  return filterByType(children, type).slice(0, num);
}
