/**
 * 참고
 * https://github.com/titicacadev/triple-frontend/blob/main/packages/core-elements/src/elements/container/container.tsx
 */

import styled from "styled-components";
import { colorMap } from "@/styles/theme";
import type { BaseProps } from "./index";

export const Base = styled.div<BaseProps>(props => ({
  boxSizing: "border-box",
  position: props.position,
  display: props.display,
  borderRadius: props.borderRadius,
  backgroundColor: props.backgroundColor
    ? colorMap[props.backgroundColor]
    : undefined,
  boxShadow: props.boxShadow,
}));
