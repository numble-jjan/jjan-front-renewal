import React, { useContext } from "react";

import Input from "@components/Core/Input";

import { FormContext } from "../Form";

import { isEmptyObj } from "@/utils/empty";

interface InputFieldProps {
  type: string;
  name: string;
}

const InputField = ({ type, name }: InputFieldProps) => {
  const { errors, touched, getFieldProps } = useContext(FormContext);

  const isErrorPresent = errors[name] && !isEmptyObj(errors[name]);
  const validFlag = !touched[name] || !isErrorPresent;

  return (
    <Input
      type={type}
      shape="border"
      isValid={validFlag}
      {...getFieldProps(name)}
    />
  );
};

export default InputField;
