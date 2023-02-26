import React from "react";
import * as Styled from "./index.styles";

import type { Color } from "@/styles/theme";

export interface DividerProps {
  color: Color;
}

const Divider = (props: DividerProps) => {
  return <Styled.Divider {...props} />;
};

export default Divider;
