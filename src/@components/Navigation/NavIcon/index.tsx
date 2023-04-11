import React, { ReactNode } from "react";

import * as Styled from "./index.styles";
import FlexBox from "@/@components/Core/Flexbox";
import FlexItem from "@/@components/Core/FlexItem";
import Text from "@/@components/Core/Text";

interface NavIconProps {
  text: string;
  defaultIcon: ReactNode;
  activeIcon: ReactNode;
  isClicked: boolean;
  isLast: boolean;
}

const NavIcon = ({
  text,
  defaultIcon,
  activeIcon,
  isClicked,
  isLast,
}: NavIconProps) => {
  const content = (
    <FlexBox
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="6px"
      padding="12px"
    >
      {isClicked ? activeIcon : defaultIcon}
      <Text
        variant={isClicked ? "f7-bold" : "f7-regular"}
        color={isClicked ? "purple" : "black"}
      >
        {text}
      </Text>
    </FlexBox>
  );
  const lastIcon = (
    <Styled.LastIcon
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {isClicked ? activeIcon : defaultIcon}
      <Text variant={isClicked ? "f7-bold" : "f7-regular"} color="white">
        {text}
      </Text>
    </Styled.LastIcon>
  );

  return (
    <>
      <FlexItem flex={1}>{content}</FlexItem>
      {isLast && lastIcon}
    </>
  );
};

export default NavIcon;
