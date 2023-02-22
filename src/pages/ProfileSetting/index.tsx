import React from "react";

import Header from "@/@components/Molecule/Header";
import Avartar from "@/@components/Atoms/Avatar";
import FormInput from "@/@components/Molecule/FormInput";
import Uploader from "@/@components/Atoms/Uploader";
import Button from "@/@components/Atoms/Button";
import Text from "@/@components/Atoms/Text";

import Input from "@/@components/Atoms/Input";
import FlexBox from "@/@components/Layout/FlexBox";

import { ReactComponent as Camera } from "@/assets/icons/icon-camera.svg";
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
      <SettingNickname />
      <SettingLocation />

      <Button height="l" shape="purple" text="프로필 설정하기" />
    </Styled.Container>
  );
};

export default ProfileSetting;

const EmptyAvartar = ({ ...props }) => {
  return (
    <Styled.AvartarContainer {...props}>
      <Avartar size="setting" src="./img-anonymous.png" />
      <Styled.IconWrapper>
        <Camera />
      </Styled.IconWrapper>
    </Styled.AvartarContainer>
  );
};
const Guide = () => {
  return (
    <Styled.Guide>
      <Styled.TextWithSpan variant="f2-regular">
        내 주변 술친구를 마주할
      </Styled.TextWithSpan>
      <Styled.TextWithSpan variant="f2-regular">
        <span>프로필을 등록</span>해주세요
      </Styled.TextWithSpan>
    </Styled.Guide>
  );
};
const SettingNickname = () => {
  return (
    <Styled.SettingNickname>
      <FormInput label="닉네임" required shape="border" isValid={true} />
      <ul>
        <li>
          <Text variant="f5-regular" color="gray">
            한글, 영문, 숫자만 2~10자 이내로 입력해주세요.
          </Text>
        </li>
        <li>
          <Text variant="f5-regular" color="gray">
            숫자로 시작하는 닉네임은 사용하실 수 없습니다.
          </Text>
        </li>
      </ul>
    </Styled.SettingNickname>
  );
};
const SettingLocation = () => {
  return (
    <Styled.SettingLocation>
      <Styled.TextWithSpan variant="f4-regular">
        활동지역 <span>*</span>
      </Styled.TextWithSpan>
      <Button height="l" shape="whiteWithPurple" text="활동지역 설정하기" />
    </Styled.SettingLocation>
  );
};
