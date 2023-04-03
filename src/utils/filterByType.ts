import { Children, isValidElement, ReactNode } from "react";

export default function filterByType(children: ReactNode, type: any) {
  const childArray = Children.toArray(children);
  return childArray.filter(
    child => isValidElement(child) && child.type === type,
  );
}
