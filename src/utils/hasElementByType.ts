import { ReactNode } from "react";
import filterByType from "./filterByType";

export default function hasElementByType(children: ReactNode, type: any) {
  const filtered = filterByType(children, type);
  return filtered.length ? true : false;
}
