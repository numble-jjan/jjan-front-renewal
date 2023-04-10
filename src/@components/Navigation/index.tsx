import React from "react";
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
            isClicked={false}
            isLast={self.length - 1 === index}
          />
        ))}
      </FlexBox>
    </Styled.Container>
  );
};

export default Navigation;
