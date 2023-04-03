import React from "react";

import * as Styled from "./index.styles";
import { ReactComponent as CancelIcon } from "@/assets/icons/icon-cancel.svg";

interface PreviewProps {
  src: string;
  onDelete: () => void;
}

const Preview = ({ src, onDelete }: PreviewProps) => {
  return (
    <Styled.Container>
      <Styled.AbsolutePosition>
        <Styled.Circle onClick={onDelete}>
          <CancelIcon />
        </Styled.Circle>
        <Styled.ImageWrapper>
          <img src={src} />
        </Styled.ImageWrapper>
      </Styled.AbsolutePosition>
    </Styled.Container>
  );
};

export default Preview;
