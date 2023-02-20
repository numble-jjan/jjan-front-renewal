import React, { PropsWithChildren } from "react";

import FlexBox from "@/@components/Layout/FlexBox";
import Text from "@/@components/Atoms/Text";

import { color } from "@/styles/theme";

interface Props {
  textBody: string;
  img?: string;
}

const Content = ({ textBody, img }: Props) => {
  return (
    <FlexBox direction="column" gap={0.9375}>
      <TextBody>{textBody}</TextBody>
      {img && <img src={img} />}
    </FlexBox>
  );
};

const TextBody = ({ children }: PropsWithChildren) => (
  <Text color={color.black} variant="f2-regular" style={{ lineHeight: "150%" }}>
    {children}
  </Text>
);

export default Content;
