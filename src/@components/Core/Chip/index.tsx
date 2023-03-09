import React from "react";
import * as Styled from "./index.styles";

import { ReactComponent as Cancellation } from "@/assets/icons/icon-cancel.svg";

interface Props {
  text: string;
  cacellation?: boolean;
  onClickDelete?: () => void;
}

const Chip = ({ text, cacellation = false, onClickDelete }: Props) => {
  return (
    <Styled.Container>
      {text}
      {cacellation && (
        <Styled.Circle onClick={onClickDelete}>
          <Cancellation />
        </Styled.Circle>
      )}
    </Styled.Container>
  );
};

export default Chip;
