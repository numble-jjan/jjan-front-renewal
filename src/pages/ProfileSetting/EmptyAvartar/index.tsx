import React from "react";

import Avartar from "@/@components/Atoms/Avatar";
import { ReactComponent as Camera } from "@/assets/icons/icon-camera.svg";

import * as Styled from "./index.styles";

const EmptyAvartar = ({ ...props }) => {
  return (
    <Styled.Container {...props}>
      <Avartar size="setting" src="./img-anonymous.png" />
      <Styled.IconWrapper>
        <Camera />
      </Styled.IconWrapper>
    </Styled.Container>
  );
};
export default EmptyAvartar;
