import React, { ReactNode } from "react";
import * as Styled from "./index.styles";

import Divider from "../Core/Divider";
import FlexBox from "../Core/Flexbox";
import FlexItem from "../Core/FlexItem";
import Text from "../Core/Text";

import {
  IconBrokenUser,
  IconBrokenLocation,
  IconBrokenHome,
  IconBrokenText,
  IconBrokenUsersMore,
} from "jjan-icon";

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
  const icons = [
    { text: "프로필", icon: <IconBrokenUser /> },
    { text: "추천 술집", icon: <IconBrokenLocation /> },
    { text: "홈", icon: <IconBrokenHome /> },
    { text: "술정보", icon: <IconBrokenText /> },
    { text: "커뮤니티", icon: <IconBrokenUsersMore /> },
  ];

  return (
    <Styled.Container>
      <Divider color="light_gray2" />
      <FlexBox>
        {icons.map(({ icon, text }, index, self) => (
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
