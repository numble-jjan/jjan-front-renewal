import React, { PropsWithChildren } from "react";
import * as Styled from "./index.styles";

const Content = ({ children }: PropsWithChildren) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Content;
