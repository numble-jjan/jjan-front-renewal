import React from "react";
import * as Styled from "./index.styles";

import Button from "../../../Atoms/Button";
import GridItems from "../../../Layout/GridItems";

export interface ConfirmModalProps {
  message: string;
  onConfirm: () => void;
  onCancle: () => void;
}

const ConfirmModal = ({ message, onConfirm, onCancle }: ConfirmModalProps) => {
  return (
    <Styled.Container>
      <Styled.MessageBox>{message}</Styled.MessageBox>
      <GridItems rows={2} gap={0}>
        <Button
          shape="whiteWithPurple"
          height="m"
          text="예"
          onClick={onConfirm}
        />
        <Button shape="purple" height="m" text="아니요" onClick={onCancle} />
      </GridItems>
    </Styled.Container>
  );
};

export default ConfirmModal;
