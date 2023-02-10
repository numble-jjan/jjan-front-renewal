import React, { ReactNode } from "react";

import FlexBox from "@/@components/Layout/FlexBox";

interface Props {
  img: ReactNode;
  main: ReactNode;
  sub: ReactNode;
}
1;

const ProfileInfo = ({ img, main, sub }: Props) => {
  // gap을 이용해 고정값으로 받아도 괜찮지 않을까라는 생각
  // 그렇다면 페이지별로 레이아웃을 어떻게 다르게 만들 수 있을까?
  return (
    <FlexBox direction="row" gap={0.625}>
      {img}
      <FlexBox
        direction="column"
        gap={0.425}
        style={{ justifyContent: "center" }}
      >
        {main}
        {sub}
      </FlexBox>
    </FlexBox>
  );
};

export default ProfileInfo;
