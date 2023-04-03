import React, { useContext } from "react";

import Text from "../../Atoms/Text";

import { FormContext } from "../Form";

interface ErrorMessageProps {
  name: string;
}

const ErrorMessage = ({ name }: ErrorMessageProps) => {
  const { touched, errors } = useContext(FormContext);

  if (!touched[name] || !errors[name]) {
    return null;
  }

  return (
    <Text color="orange" variant="f6-regular">
      {errors[name].message}
    </Text>
  );
};

export default ErrorMessage;
