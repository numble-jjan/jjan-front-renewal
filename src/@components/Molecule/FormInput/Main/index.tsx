import React from "react";
import type { ReactNode } from "react";

import FlexBox from "@/@components/Layout/FlexBox";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <FlexBox direction="column" gap={0.25}>
      {children}
    </FlexBox>
  );
};

export default Main;
