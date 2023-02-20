import React, { ReactNode } from "react";
import * as Styled from "./index.styles";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Card;
