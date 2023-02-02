import React from "react";
import * as Styled from "./index.styles";
import { badge } from "../../../styles/theme";

interface Props {
  text: string;
  cacellation: boolean;
}
// todo : SVG Component로 만든 캔슬 아이콘이 들어가야함.
const Chip = ({ text, cacellation }: Props) => {
  return (
    <Styled.Container style={badge.gray}>
      {text}
      {cacellation && "x"}
    </Styled.Container>
  );
};

export default Chip;
