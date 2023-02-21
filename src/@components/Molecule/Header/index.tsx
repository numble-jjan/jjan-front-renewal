import React from "react";

import Text from "../../Atoms/Text";
import Divider from "../../Atoms/Divider";

// import usePrevious from "@/@hooks/usePrevious";
import { ReactComponent as Prev } from "@/assets/icons/icon-prev.svg";

import * as Styled from "./index.styles";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  // const { goPrevious } = usePrevious();

  /* eslint-disable */
  const exHandler = () => {};

  return (
    <>
      <Styled.Container>
        <Styled.IconWrapper onClick={exHandler}>
          <Prev />
        </Styled.IconWrapper>
        <Text variant="f1-regular">{title}</Text>
      </Styled.Container>
      <Divider color="light_gray2" />
    </>
  );
};

export default Header;
