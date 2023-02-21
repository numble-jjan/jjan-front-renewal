import React from "react";

import * as Styled from "./index.styles";
import { ReactComponent as Logo } from "@/assets/icons/icon-logo.svg";

const Splash = ({ ...args }) => {
  return (
    <Styled.Container {...args}>
      <Logo />
    </Styled.Container>
  );
};

export default Splash;
