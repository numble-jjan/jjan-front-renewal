import React from "react";

import FormInput from "@/@components/Molecule/FormInput";
import Text from "@/@components/Atoms/Text";
import * as Styled from "./index.styles";

const NicknameSetting = () => {
  return (
    <Styled.Container>
      <FormInput>
        <FormInput.Label text="닉네임" isRequired />
        <FormInput.InputWithButton>
          <FormInput.InputWithButton.Input placeholder="닉네임 입력" />
          <FormInput.InputWithButton.Button text="중복확인" />
        </FormInput.InputWithButton>
      </FormInput>
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
    </Styled.Container>
  );
};

export default NicknameSetting;
