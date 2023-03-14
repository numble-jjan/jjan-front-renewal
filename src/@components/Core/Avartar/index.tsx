import React from "react";
import * as Styled from "./index.styles";
import type { ImageSize } from "@/types/image";

export type AvartarVariant = "setting" | "profile" | "author" | "comment";
export type AvartarSize = {
  [key in AvartarVariant]: ImageSize;
};

interface AvartarProps {
  src: string;
  variant: AvartarVariant;
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
