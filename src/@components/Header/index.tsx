import React from "react";
import * as Styled from "./index.styles";

import Text from "../Core/Text";
import Divider from "../Core/Divider";
import FlexBox from "../Core/Flexbox";
import FlexItem from "../Core/FlexItem";

// todo : icon libarary로 추후에 교체
import { ReactComponent as IconPrev } from "@/assets/icons/icon-prev.svg";

interface Props {
  title: string;
  rightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Header = ({ title, rightIcon }: Props) => {
  const RightIcon = rightIcon;

  return (
    <Styled.Container>
      <FlexBox alignItems={"center"}>
        <FlexItem>
          <Styled.IconWrapper justifyContent={"center"} alignItems={"center"}>
            <IconPrev />
          </Styled.IconWrapper>
        </FlexItem>
        <FlexItem flex={1}>
          <FlexBox justifyContent={"center"} alignItems={"center"}>
            <Text variant="f1-regular">{title}</Text>
          </FlexBox>
        </FlexItem>
        <FlexItem>
          <Styled.IconWrapper justifyContent={"center"} alignItems={"center"}>
            {RightIcon && <RightIcon />}
          </Styled.IconWrapper>
        </FlexItem>
      </FlexBox>
      <Divider color="light_gray2" />
    </Styled.Container>
  );
};

export default Header;
