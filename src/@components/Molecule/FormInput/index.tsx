import React from "react";
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
  required?: boolean;
  isTouched?: boolean;
}

const FormInput = (props: Props) => {
  const {
    label,
    isValid,
    shape,
    errorMessage,
    confirmMessage,
    // required,
    // isTouched,
    type,
  } = props;
  return (
    <FlexBox direction="column" gap={0.25}>
      <Text variant="f4-regular">{label}</Text>
      <Input type={type} shape={shape} isValid={isValid} />
      <Text color="orange" variant="f6-regular">
        {errorMessage}
      </Text>
      <Text color="purple" variant="f6-regular">
        {confirmMessage}
      </Text>
    </FlexBox>
  );
};

export default FormInput;
