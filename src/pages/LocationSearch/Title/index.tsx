import * as React from "react";

import TitleBar from "@/@components/Molecule/TitleBar";
import Divider from "@/@components/Core/Divider";

const Title = () => {
  return (
    <div>
      <TitleBar content="활동지역 설정" required={false} />
      <Divider color="black" />
    </div>
  );
};

export default Title;
