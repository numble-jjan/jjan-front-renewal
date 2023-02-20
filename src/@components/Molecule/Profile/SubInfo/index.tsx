import React, { useContext } from "react";
import Text from "@/@components/Atoms/Text";
import { profileContext } from "../Main";
import { SUB_INFO } from "../textMap";
import { color } from "@/styles/theme";
import FlexBox from "@/@components/Layout/FlexBox";

import { ReactComponent as Location } from "@/assets/icons/icon-location.svg";

interface Props {
  location?: string;
  createdAt?: string;
}

const SubInfo = ({ location, createdAt }: Props) => {
  const profile = useContext(profileContext);

  return (
    <FlexBox direction="row" gap={0.125}>
      <Location />
      <Text variant={SUB_INFO[profile]} color={color.gray}>
        {location}
      </Text>
      <Text variant={SUB_INFO[profile]} color={color.gray}>
        {location && createdAt && "·"}
      </Text>
      <Text variant={SUB_INFO[profile]} color={color.gray}>
        {createdAt}
      </Text>
    </FlexBox>
  );
};

export default SubInfo;
