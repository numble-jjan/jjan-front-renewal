import React from "react";

import * as Styled from "./index.styles";

interface Props extends React.PropsWithChildren {
  hasBorder: boolean;
  hasPadding?: boolean;
}

const Main = ({ hasBorder, hasPadding, children }: Props) => {
  let paddingFlag = true;

  if (!hasPadding) {
    paddingFlag = false;
  }

  return (
    <Styled.Container hasBorder={hasBorder} hasPadding={paddingFlag}>
      {children}
    </Styled.Container>
  );
};

export default Main;
