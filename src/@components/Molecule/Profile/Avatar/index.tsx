import React from "react";
import * as Styled from "./index.styles";

import type { ProfileFormat } from "@/styles/theme";

interface AvartarProps {
  src: string;
  size: ProfileFormat;
}
const Avartar = ({ src, size }: AvartarProps) => {
  return (
    <Styled.Wrapper size={size}>
      <img src={src} />
    </Styled.Wrapper>
  );
};

export default Avartar;
