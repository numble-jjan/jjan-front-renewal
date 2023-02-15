import React, { PropsWithChildren } from "react";

import FlexBox from "@/@components/Layout/FlexBox";
import Like from "./Like";
import Comment from "./Comment";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <FlexBox direction="row" gap={0.938}>
      {children}
    </FlexBox>
  );
};

const SocialInfo = Object.assign(Main, {
  Like,
  Comment,
});

export default SocialInfo;
