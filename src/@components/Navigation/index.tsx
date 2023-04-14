import React, { useState } from "react";
import * as Styled from "./index.styles";

import Divider from "../Core/Divider";
import FlexBox from "../Core/Flexbox";
import NavIcon from "./NavIcon";

import { NAV_ICONS } from "@/constants/navIcons";

/**
 * todo :
 * recoil을 통해 전역적으로 눌러진 컴포넌트가 무엇인지 상태로서 관리하기로 하였습니다. 따라서 이후 전역 상태가 추가된 뒤 isClick 인자를 활성화하도록 하겠습니다.
 */

const Navigation = () => {
  const [navIcons, setNavIcons] = useState(NAV_ICONS);
  const createNavIconClickHandler = (text: string) => () => {
    const newNavIcons = navIcons.map(icon => {
      if (text === icon.text) return { ...icon, isClicked: true };
      else return { ...icon, isClicked: false };
    });
    setNavIcons(newNavIcons);
  };

  return (
    <Styled.Container>
      <Divider color="light_gray2" />
      <FlexBox>
        {navIcons.map((icon, index, self) => (
          <NavIcon
            key={icon.text}
            isLast={self.length - 1 === index}
            onClick={createNavIconClickHandler(icon.text)}
            {...icon}
          />
        ))}
      </FlexBox>
    </Styled.Container>
  );
};

export default Navigation;
