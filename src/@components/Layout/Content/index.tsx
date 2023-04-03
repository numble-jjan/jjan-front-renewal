import React, { PropsWithChildren, useContext } from "react";
import * as Styled from "./index.styles";
import { layoutContext } from "../index";

const Content = ({ children }: PropsWithChildren) => {
  const { hasBottom, hasHeader } = useContext(layoutContext);

  return (
    <Styled.Container hasHeader={hasHeader} hasBottom={hasBottom}>
      {children}
    </Styled.Container>
  );
};

export default Content;
