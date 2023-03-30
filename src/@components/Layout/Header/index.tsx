import React from "react";
import * as Styled from "./index.styles";
import OriginalHeader, { Props } from "@/@components/Header";

const Header = ({ title, hasMeatball, onClickMeatball }: Props) => {
  return (
    <Styled.Position>
      <OriginalHeader
        title={title}
        hasMeatball={hasMeatball}
        onClickMeatball={onClickMeatball}
      />
    </Styled.Position>
  );
};

export default Header;
