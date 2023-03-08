import React from "react";
import * as Styled from "./index.styles";

import type { AvartarFormat } from "@/types/avartar";

interface AvartarProps {
  src: string;
  variant: AvartarFormat;
}

const Avartar = ({ src, variant }: AvartarProps) => {
  return (
    <Styled.Wrapper variant={variant}>
      <img src={src} />
    </Styled.Wrapper>
  );
};

export default Avartar;
