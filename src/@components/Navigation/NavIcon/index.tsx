import React, { MouseEventHandler, ReactNode } from "react";

import * as Styled from "./index.styles";
import FlexItem from "@/@components/Core/FlexItem";
import Text from "@/@components/Core/Text";

interface NavIconProps {
  text: string;
  defaultIcon: ReactNode;
  activeIcon: ReactNode;
  isClicked: boolean;
  isLast: boolean;
  onClick: MouseEventHandler<HTMLOrSVGElement>;
}

const NavIcon = ({
  text,
  defaultIcon,
  activeIcon,
  isClicked,
  isLast,
  onClick,
}: NavIconProps) => {
  const content = (
    <Styled.FlexBoxWithPointer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="6px"
      padding="12px"
      onClick={onClick}
    >
      {isClicked ? activeIcon : defaultIcon}
      <Text
        variant={isClicked ? "f7-bold" : "f7-regular"}
        color={isClicked ? "purple" : "black"}
      >
        {text}
      </Text>
    </Styled.FlexBoxWithPointer>
  );
  const lastIcon = (
    <Styled.LastIcon
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      onClick={onClick}
    >
      {isClicked ? activeIcon : defaultIcon}
      <Text variant={isClicked ? "f7-bold" : "f7-regular"} color="white">
        {text}
      </Text>
    </Styled.LastIcon>
  );

  return (
    <>
      <FlexItem flex={1}>{!isLast && content}</FlexItem>
      {isLast && lastIcon}
    </>
  );
};

export default NavIcon;
