import React from "react";

import * as Styled from "./index.styles";
import Text from "@/@components/Atoms/Text";
import Divider from "@/@components/Atoms/Divider";

import { BOTTOM_NAV_ITEMS } from "@/constants/items";
import { color } from "@/styles/theme";

interface IconProps {
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isSelected: boolean;
  special: boolean;
  onClick?: () => void;
}

const NavIcon = ({ text, icon, isSelected, special, onClick }: IconProps) => {
  const Icon = icon;

  if (special) {
    return (
      <Styled.SpecialIconWrapper>
        <Icon />
        <Text
          color={color.white}
          variant={isSelected ? "f7-bold" : "f7-regular"}
        >
          {text}
        </Text>
      </Styled.SpecialIconWrapper>
    );
  }
  return (
    <Styled.IconWrapper onClick={onClick}>
      <Icon />
      <Text
        color={isSelected === true ? color.purple : color.black}
        variant={isSelected ? "f7-bold" : "f7-regular"}
      >
        {text}
      </Text>
    </Styled.IconWrapper>
  );
};

const BottomNav = ({ ...rest }) => {
  const selected = false;

  return (
    <div>
      <Divider color={color.light_gray2} />
      <Styled.Container {...rest}>
        {BOTTOM_NAV_ITEMS.map(({ text, icon }, index, self) => (
          <NavIcon
            key={index}
            text={text}
            icon={selected ? icon.selected : icon.unselected}
            isSelected={false}
            special={index === self.length - 1 ? true : false}
            onClick={() => {
              return undefined;
            }}
          />
        ))}
      </Styled.Container>
    </div>
  );
};

export default BottomNav;
