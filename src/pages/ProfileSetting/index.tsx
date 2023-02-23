import React from "react";

import Header from "@/@components/Molecule/Header";

import Uploader from "@/@components/Atoms/Uploader";
import Button from "@/@components/Atoms/Button";

import EmptyAvartar from "./EmptyAvartar";
import Guide from "./Guide";
import NicknameSetting from "./NicknameSetting";
import LocationSetting from "./LocationSetting";

import * as Styled from "./index.styles";

/**
 * todo
 * 1. FormInput의 register값을 추가해야함
 * 2. FormInput의 width 값이 100%로 수정되어야 할 듯
 */

const ProfileSetting = () => {
  return (
    <Styled.Container>
      <Header title="프로필 설정" />
      <Guide />
      <Uploader imageComponent={<EmptyAvartar />} />
      <NicknameSetting />
      <LocationSetting />
      <Button height="l" shape="purple" text="프로필 설정하기" />
    </Styled.Container>
  );
};

export default ProfileSetting;
