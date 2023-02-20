import React, { PropsWithChildren } from "react";

import FlexBox from "@/@components/Layout/FlexBox";
import Text from "@/@components/Atoms/Text";
import { ReactComponent as Location } from "@/assets/icons/icon-location.svg";

import { color } from "@/styles/theme";

interface Props {
  userName: string;
  createdAt: string;
  location: string;
}

const Header = ({ userName, createdAt, location }: Props) => {
  return (
    <FlexBox direction="row" style={{ justifyContent: "space-between" }}>
      <FlexBox direction="row" gap={0.1875}>
        <UserName>{userName}</UserName>
        <Text variant="f4-regular">·</Text>
        <CreatedAt>{createdAt}</CreatedAt>
      </FlexBox>
      <LocationWithIcon>{location}</LocationWithIcon>
    </FlexBox>
  );
};

const UserName = ({ children }: PropsWithChildren) => {
  return (
    <Text color={color.black} variant="f4-regular">
      {children}
    </Text>
  );
};

const CreatedAt = ({ children }: PropsWithChildren) => {
  return (
    <Text color={color.gray} variant="f4-regular">
      {children}
    </Text>
  );
};

const LocationWithIcon = ({ children }: PropsWithChildren) => {
  return (
    <FlexBox direction="row" gap={0.188}>
      <Location />
      <Text color={color.gray} variant="f3-regular">
        {children}
      </Text>
    </FlexBox>
  );
};

export default Header;
