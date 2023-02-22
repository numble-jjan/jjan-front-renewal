import React, { ReactNode } from "react";
import FlexBox from "@/@components/Layout/FlexBox";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <FlexBox direction="row" gap={0.313}>
      {children}
    </FlexBox>
  );
};

export default Main;
