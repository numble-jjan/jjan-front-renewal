import React, { ReactNode } from "react";
import * as Styled from "./index.styles";

import Divider from "../Core/Divider";
import FlexBox from "../Core/Flexbox";
import FlexItem from "../Core/FlexItem";
import Text from "../Core/Text";
import { NAV_ICONS } from "@/constants/navIcons";

interface NavIconProps {
  text: string;
  defaultIcon: ReactNode;
  activeIcon: ReactNode;
  isLast: boolean;
  isClicked: boolean;
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
      backgroundColor="white"
    >
      {isClicked ? activeIcon : defaultIcon}
      <Text
        variant={isClicked ? "f7-bold" : "f7-regular"}
        color={isLast ? "white" : isClicked ? "purple" : "black"}
      >
        {text}
      </Text>
    </FlexBox>
  );

  return (
    <>
      <FlexItem flex={1}>{content}</FlexItem>
      {isLast && <Styled.LastIcon>{content}</Styled.LastIcon>}
    </>
  );
};

/**
 * todo :
 * recoil을 통해 전역적으로 눌러진 컴포넌트가 무엇인지 상태로서 관리하기로 하였습니다. 따라서 이후 전역 상태가 추가된 뒤 isClick 인자를 활성화하도록 하겠습니다.
 */

const Navigation = () => {
  return (
    <Styled.Container>
      <Divider color="light_gray2" />
      <FlexBox>
        {NAV_ICONS.map(({ defaultIcon, activeIcon, text }, index, self) => (
          <NavIcon
            key={text}
            text={text}
            activeIcon={activeIcon}
            defaultIcon={defaultIcon}
            isLast={index === self.length - 1}
            isClicked={false}
          />
        ))}
      </FlexBox>
    </Styled.Container>
  );
};

export default Navigation;
