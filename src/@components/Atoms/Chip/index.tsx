import React from "react";
import * as Styled from "./index.styles";

import { badge } from "../../../styles/theme";
import { ReactComponent as Cancellation } from "../../../assets/icons/icon-cancel.svg";

interface Props {
  text: string;
  cacellation: boolean;
  onClick: () => void;
}

const Chip = ({ text, cacellation, onClick }: Props) => {
  return (
    <Styled.Container style={badge.gray}>
      {text}
      {cacellation && (
        <Styled.Circle onClick={onClick}>
          <Cancellation />
        </Styled.Circle>
      )}
    </Styled.Container>
  );
};

export default Chip;
