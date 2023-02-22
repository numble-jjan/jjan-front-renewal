import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import type { InputType, InputShape } from "@/@components/Atoms/Input";

import Text from "@/@components/Atoms/Text";
import Input from "@/@components/Atoms/Input";
import FlexBox from "@/@components/Layout/FlexBox";

interface Props extends InputType {
  label: string;
  isValid: boolean;
  shape: InputShape;
  errorMessage?: string;
  confirmMessage?: string;
  /**
   * react-hook-form dependency
   */
  register: UseFormRegisterReturn;
  isTouched?: boolean;
  isRequired?: boolean;
}

const FormInput = (props: Props) => {
  const {
    label,
    isValid,
    shape,
    errorMessage,
    confirmMessage,
    register,
    isTouched,
    isRequired,
    type,
  } = props;
  return (
    <FlexBox direction="column" gap={0.25}>
      <Text variant="f4-regular" style={{ display: "inline" }}>
        {label}
        {isRequired && (
          <Text
            color="purple"
            variant="f4-regular"
            style={{ display: "inline" }}
          >
            *
          </Text>
        )}
      </Text>
      <Input type={type} shape={shape} isValid={isValid} {...register} />
      {/**
       * @todo error, confirm 메시지의 출력 조건 수정
       * @todo 명령형 => 선언형
       */}
      {!isValid && errorMessage && (
        <Text color="orange" variant="f6-regular">
          {errorMessage}
        </Text>
      )}
      {isValid && isTouched && confirmMessage && (
        <Text color="purple" variant="f6-regular">
          {confirmMessage}
        </Text>
      )}
    </FlexBox>
  );
};

export default FormInput;
