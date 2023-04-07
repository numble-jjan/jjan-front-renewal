import React from "react";
import * as Styled from "../index.styles";
import Imgaes from "@/constants/images";

const Logo = () => {
  return (
    <Styled.MarginBottom margin={44}>
      <img src={Imgaes.LOGO_SRC}></img>
    </Styled.MarginBottom>
  );
};

export default Logo;
