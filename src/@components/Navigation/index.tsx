import React, { ReactNode } from "react";
import * as Styled from "./index.styles";

import Divider from "../Core/Divider";
import FlexBox from "../Core/Flexbox";
import FlexItem from "../Core/FlexItem";
import Text from "../Core/Text";
import { NAV_ICONS } from "@/constants/navIcons";

interface NavIconProps {
  text: string;
  icon: ReactNode;
  emphasis: boolean;
}

const NavIcon = ({ text, icon, emphasis }: NavIconProps) => {
  const content = (
    <FlexBox
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="6px"
      padding="12px"
      backgroundColor="white"
    >
      {icon}
      <Text variant="f7-regular" color={emphasis ? "white" : "black"}>
        {text}
      </Text>
    </FlexBox>
  );
  return (
    <>
      <FlexItem flex={1}>{content}</FlexItem>
      {emphasis && <Styled.EmphasisIcon>{content}</Styled.EmphasisIcon>}
    </>
  );
};

const Navigation = () => {
  return (
    <Styled.Container>
      <Divider color="light_gray2" />
      <FlexBox>
        {NAV_ICONS.map(({ icon, text }, index, self) => (
          <NavIcon
            key={text}
            text={text}
            icon={icon}
            emphasis={index === self.length - 1}
          />
        ))}
      </FlexBox>
    </Styled.Container>
  );
};

export default Navigation;
