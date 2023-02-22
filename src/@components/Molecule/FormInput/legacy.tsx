import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import type { InputType, InputShape } from "@/@components/Atoms/Input";

import FeedBackMessage from "./FeedBackMessage";
import Label from "./Label";

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
      <Label text={label} isRequired={isRequired} />
      <Input type={type} shape={shape} isValid={isValid} {...register} />
      <FeedBackMessage
        isValid={isValid}
        isTouched={isTouched}
        errorMessage={errorMessage}
        confirmMessage={confirmMessage}
      />
    </FlexBox>
  );
};

export default FormInput;
