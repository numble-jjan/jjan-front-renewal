import React, { PropsWithChildren } from "react";
import * as Styled from "./index.styles";
import { useLayoutContext } from "../index";

const Content = ({ children }: PropsWithChildren) => {
  const { hasBottom, hasHeader } = useLayoutContext();

  return (
    <Styled.Container hasHeader={hasHeader} hasBottom={hasBottom}>
      {children}
    </Styled.Container>
  );
};

export default Content;
