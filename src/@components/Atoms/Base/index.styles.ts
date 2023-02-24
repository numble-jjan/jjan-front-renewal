/**
 * 참고
 * https://github.com/titicacadev/triple-frontend/blob/main/packages/core-elements/src/elements/container/container.tsx
 */

import styled from "styled-components";
import { Color, colorMap } from "@/styles/theme";
import type { Property } from "csstype";
import type { PropsWithChildren } from "react";

export type BaseProps = PropsWithChildren<{
  position?: Property.Position;
  display?: Property.Display;
  borderRadious?: number;
  boxShadow: Property.BoxShadow;
  backgroundColor?: Color;
}>;

export const Base = styled.div<BaseProps>(props => ({
  boxSizing: "border-box",
  position: props.position,
  display: props.display,
  backgroundColor: props.backgroundColor
    ? colorMap[props.backgroundColor]
    : undefined,
  boxShadow: props.boxShadow,
}));
