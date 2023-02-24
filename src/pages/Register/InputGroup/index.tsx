import React from "react";

import FlexBox from "@/@components/Layout/FlexBox";
import RegisterInput from "../RegisterInput";

import type { UseFormRegister, FieldErrorsImpl } from "react-hook-form";

export type SignUpFormData = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

interface InputGroupProps {
  register: UseFormRegister<SignUpFormData>;
  errors: Partial<FieldErrorsImpl<SignUpFormData>>;
}

const InputGroup = ({ register, errors }: InputGroupProps) => {
  return (
    <FlexBox direction="column" gap={0.625}>
      <RegisterInput
        label="이메일"
        placeholder="이메일 주소"
        isValid={!errors.email?.message}
        type="text"
        errorMessage={errors.email && String(errors.email.message)}
        {...register("email")}
      />
      <RegisterInput
        label="비밀번호"
        placeholder="영문 대소문자, 숫자, !@#$%^&*"
        isValid={!errors.password?.message}
        type="password"
        errorMessage={errors.password && String(errors.password.message)}
        {...register("password")}
      />
      <RegisterInput
        label="비밀번호 확인"
        placeholder="비밀번호 재입력"
        isValid={!errors.passwordConfirmation?.message}
        type="password"
        errorMessage={
          errors.passwordConfirmation &&
          String(errors.passwordConfirmation.message)
        }
        {...register("passwordConfirmation")}
      />
    </FlexBox>
  );
};

export default InputGroup;
