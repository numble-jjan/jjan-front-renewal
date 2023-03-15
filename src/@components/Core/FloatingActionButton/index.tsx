import React from "react";

import * as Styled from "./index.styles";
import type { Property } from "csstype";

export type FabVariant = "small" | "medium";
export interface Props {
  variant: FabVariant;
  zIndex: Property.ZIndex;
  element?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

const FloatingActionButton = ({ element, ...props }: Props) => {
  const Element = element || "div";

  return <Styled.Container {...props}>{<Element />}</Styled.Container>;
};

export default FloatingActionButton;
