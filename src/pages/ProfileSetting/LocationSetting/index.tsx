import React from "react";

import Button from "@/@components/Atoms/Button";
import * as Styled from "./index.styles";

const LocationSetting = () => {
  return (
    <Styled.Container>
      <Styled.TextWithSpan variant="f4-regular">
        활동지역 <span>*</span>
      </Styled.TextWithSpan>
      <Button height="m" shape="whiteWithPurple" text="활동지역 설정하기" />
    </Styled.Container>
  );
};

export default LocationSetting;
