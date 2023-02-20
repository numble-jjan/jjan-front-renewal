import React from "react";
import * as Styled from "./index.styles";

import Button from "../../../Atoms/Button";
import GridItems from "../../../Layout/GridItems";

interface ConfirmModalProps {
  alertMsg: string;
  confirmMsg: string;
  cancleMsg: string;
  //   onConfirm: () => void;
  //   onCancle: () => void;
}

const ConfirmModal = ({
  alertMsg,
  confirmMsg,
  cancleMsg,
}: ConfirmModalProps) => {
  return (
    <Styled.Container>
      <Styled.MessageBox>{alertMsg}</Styled.MessageBox>
      <GridItems rows={2} gap={0}>
        <Button shape="whiteWithPurple" height="m" text={confirmMsg} />
        <Button shape="purple" height="m" text={cancleMsg} />
      </GridItems>
    </Styled.Container>
  );
};

export default ConfirmModal;
