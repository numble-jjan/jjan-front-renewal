import React from "react";

import * as Styled from "./index.styles";
import { ReactComponent as Cancellation } from "@/assets/icons/icon-cancel.svg";

interface PreviewProps {
  src: string;
  onDelete: () => void;
}

const Preview = ({ src, onDelete }: PreviewProps) => {
  return (
    <Styled.Contaienr>
      <Styled.AbsoultePosition>
        <Styled.Circle onClick={onDelete}>
          <Cancellation />
        </Styled.Circle>
        <Styled.ImageWrapper>
          <img src={src} />
        </Styled.ImageWrapper>
      </Styled.AbsoultePosition>
    </Styled.Contaienr>
  );
};

export default Preview;
