import React, { EventHandler } from "react";
import * as Styled from "./index.styles";

import Text from "../Core/Text";
import Divider from "../Core/Divider";
import FlexBox from "../Core/Flexbox";
import FlexItem from "../Core/FlexItem";

import { IconMenuHorizontal } from "jjan-icon";

export interface Props {
  title: string;
  hasMeatball?: boolean;
  onClickMeatball?: EventHandler<React.MouseEvent<HTMLDivElement>>;
}

const Header = ({ title, hasMeatball, onClickMeatball }: Props) => {
  return (
    <Styled.Container>
      <FlexBox alignItems={"center"}>
        <FlexItem>
          <Styled.IconWrapper justifyContent={"center"} alignItems={"center"}>
            <IconMenuHorizontal />
          </Styled.IconWrapper>
        </FlexItem>
        <FlexItem flex={1}>
          <FlexBox justifyContent={"center"} alignItems={"center"}>
            <Text variant="f1-regular">{title}</Text>
          </FlexBox>
        </FlexItem>
        <FlexItem>
          <Styled.IconWrapper
            justifyContent={"center"}
            alignItems={"center"}
            onClick={hasMeatball ? onClickMeatball : undefined}
          >
            {hasMeatball && <IconMenuHorizontal />}
          </Styled.IconWrapper>
        </FlexItem>
      </FlexBox>
      <Divider color="light_gray2" />
    </Styled.Container>
  );
};

export default Header;
