import React from "react";
import * as Styled from "./index.styles";

interface Props {
  children?: React.ReactNode;
}

const RightDetails = ({ children }: Props) => {
  return <Styled.Container>{children}</Styled.Container>;
};
export default RightDetails;
