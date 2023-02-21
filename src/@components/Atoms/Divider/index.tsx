import React, { CSSProperties } from "react";
import * as Styled from "./index.styles";
import { Color, color as colorMap } from "@/styles/theme";

interface Props {
  color: Color;
  style?: CSSProperties;
}
const Divider = ({ color, style }: Props) => {
  return <Styled.Root color={colorMap[color]} style={style} />;
};
export default Divider;
