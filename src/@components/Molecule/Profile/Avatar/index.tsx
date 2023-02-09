import React from "react";
import * as Styled from "./index.styles";

import type { AvartarSizeName } from "@/styles/theme";

interface AvartarProps {
  src: string;
  size: AvartarSizeName;
}
const Avartar = ({ src, size }: AvartarProps) => {
  return (
    <Styled.Wrapper size={size}>
      <img src={src} />
    </Styled.Wrapper>
  );
};

export default Avartar;
