import React from "react";

import * as Styled from "./index.styles";
import { ReactComponent as Camera } from "@/assets/icons/icon-camera-gray.svg";

interface SelectProps {
  onClick: () => void;
}

const ImageSelectButton = ({ onClick }: SelectProps) => {
  return (
    <Styled.Container onClick={onClick}>
      <Camera />
    </Styled.Container>
  );
};

export default ImageSelectButton;
