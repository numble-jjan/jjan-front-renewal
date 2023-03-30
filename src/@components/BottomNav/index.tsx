import React, { ReactNode } from "react";
import * as Styled from "./index.styles";

import Divider from "../Core/Divider";
import FlexBox from "../Core/Flexbox";
import FlexItem from "../Core/FlexItem";
import Text from "../Core/Text";

import { ReactComponent as ProfileIcon } from "@/assets/icons/icon-profile-broken.svg";
import { ReactComponent as LocationIcon } from "@/assets/icons/icon-location-broken.svg";
import { ReactComponent as HomeIcon } from "@/assets/icons/icon-home-broken.svg";
import { ReactComponent as InformationIcon } from "@/assets/icons/icon-information-broken.svg";
import { ReactComponent as CommunityIcon } from "@/assets/icons/icon-community.svg";

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

const BottomNav = () => {
  const icons = [
    { text: "프로필", icon: <ProfileIcon /> },
    { text: "추천 술집", icon: <LocationIcon /> },
    { text: "홈", icon: <HomeIcon /> },
    { text: "술정보", icon: <InformationIcon /> },
    { text: "커뮤니티", icon: <CommunityIcon /> },
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

export default BottomNav;
