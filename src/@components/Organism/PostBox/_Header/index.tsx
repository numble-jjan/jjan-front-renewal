import React, { ReactNode } from "react";

import Divider from "@/@components/Atoms/Divider";
import * as Styled from "./index.styles";
import { color } from "@/styles/theme";

interface Props {
  children?: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <Styled.Container>
      <Styled.Children>{children}</Styled.Children>
      <Divider color={color.light_gray1} />
    </Styled.Container>
  );
};

export default Header;
