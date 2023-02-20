import React from "react";

import Text from "@/@components/Atoms/Text";
import Divider from "@/@components/Atoms/Divider";
import { ReactComponent as Location } from "@/assets/icons/icon-location.svg";
import * as Styled from "./index.styles";
import { color } from "@/styles/theme";

interface Props {
  location: string;
}

const LocationHeader = ({ location }: Props) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Location />
        <Text variant="f4-regular">{location}</Text>
      </Styled.Content>
      <Divider color={color.light_gray1} />
    </Styled.Container>
  );
};

export default LocationHeader;
