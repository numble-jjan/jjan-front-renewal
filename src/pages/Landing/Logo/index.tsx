import React from "react";

import Base from "@/@components/Core/Base";
import Imgaes from "@/constants/images";

const Logo = () => {
  return (
    <Base margin={`0 0 44px 0`}>
      <img src={Imgaes.LOGO_SRC}></img>
    </Base>
  );
};

export default Logo;
