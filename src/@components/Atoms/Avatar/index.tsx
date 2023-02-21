import React from "react";
import * as Styled from "./index.styles";

import type { AvartarFormat } from "@/types/avartar";

interface AvartarProps {
  src: string;
  size: AvartarFormat;
}

const Avartar = ({ src, size }: AvartarProps) => {
  return (
    <Styled.Wrapper size={size}>
      <img src={src} />
    </Styled.Wrapper>
  );
};

export default Avartar;
