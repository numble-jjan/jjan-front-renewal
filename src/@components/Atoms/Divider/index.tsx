import React from "react";
import * as Styled from "./index.styles";
import type { BaseProps } from "../Base";

export type DividerProps = BaseProps;

const Divider = (props: DividerProps) => {
  return <Styled.Divider {...props} />;
};

export default Divider;
