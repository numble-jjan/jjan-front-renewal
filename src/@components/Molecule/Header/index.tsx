import React from "react";

import Text from "../../Atoms/Text";
import Divider from "../../Atoms/Divider";

// import usePrevious from "@/@hooks/usePrevious";

import { color } from "../../../styles/theme";

import * as Styled from "./index.styles";

interface Props {
  title: string;
}

//todo : "<"를 이후에 SVG 컴포넌트로 수정해야함
const Header = ({ title }: Props) => {
  // const { goPrevious } = usePrevious();

  /* eslint-disable */
  const exHandler = () => {};

  return (
    <>
      <Styled.Container>
        <Styled.IconWrapper onClick={exHandler}>{"<"}</Styled.IconWrapper>
        <Text fontSize={18}>{title}</Text>
      </Styled.Container>
      <Divider color={color.light_gray2} />
    </>
  );
};

export default Header;
