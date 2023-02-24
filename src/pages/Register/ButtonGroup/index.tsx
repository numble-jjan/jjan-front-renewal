import React from "react";

import Button from "@/@components/Atoms/Button";
import GridItems from "@/@components/Layout/GridItems";

interface ButtonGroupProps {
  onCancle: () => void;
  onConfirm: () => void;
}

const ButtonGroup = ({ onCancle, onConfirm }: ButtonGroupProps) => {
  return (
    <GridItems rows={2} gap={5}>
      <Button
        text="취소"
        shape="whiteWithPurple"
        height="l"
        onClick={onCancle}
      />
      <Button text="회원가입" shape="purple" height="l" onClick={onConfirm} />
    </GridItems>
  );
};

export default ButtonGroup;
