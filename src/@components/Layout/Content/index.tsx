import React, { PropsWithChildren } from "react";
import * as Styled from "./index.styles";

export interface Props {
  hasHeader: boolean;
}

const Content = ({ children, hasHeader }: PropsWithChildren<Props>) => {
  return <Styled.Container hasHeader={hasHeader}>{children}</Styled.Container>;
};

export default Content;
