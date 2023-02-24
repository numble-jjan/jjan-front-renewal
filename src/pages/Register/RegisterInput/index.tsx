import React, { forwardRef } from "react";

import FormInput from "@/@components/Molecule/FormInput";

import type { Ref, InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
  label: string;
  isValid: boolean;
  errorMessage?: string;
}

const RegisterInput = forwardRef(
  (
    { label, placeholder, isValid, errorMessage, ...rest }: FormInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <FormInput>
        <FormInput.Label text={label} />
        <FormInput.Input
          ref={ref}
          shape="border"
          isValid={isValid}
          placeholder={placeholder}
          {...rest}
        />
        <FormInput.FeedBackMessage
          isValid={isValid}
          errorMessage={errorMessage}
        />
      </FormInput>
    );
  },
);

RegisterInput.displayName = "RegisterInput";

export default RegisterInput;
