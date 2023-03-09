import React from "react";
import * as Styled from "./index.styles";
import type { AvartarFormat } from "@/types/avartar";

interface AvartarProps {
  src: string;
  variant: AvartarFormat;
}

const DEFAULT_SRC = "./img-anonymous.png";

const Avartar = ({ src = DEFAULT_SRC, variant }: AvartarProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.target instanceof HTMLImageElement) {
      e.target.src = DEFAULT_SRC;
    }
  };

  return (
    <Styled.Wrapper variant={variant}>
      <img src={src} onError={handleError} />
    </Styled.Wrapper>
  );
};

export default Avartar;
