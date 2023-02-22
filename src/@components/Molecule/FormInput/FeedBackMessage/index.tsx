import React from "react";

import Text from "@/@components/Atoms/Text";

interface FeebBackMessageProps {
  isValid?: boolean;
  isTouched?: boolean;
  errorMessage?: string;
  confirmMessage?: string;
}

const FeedBackMessage = ({
  isValid,
  isTouched,
  errorMessage,
  confirmMessage,
}: FeebBackMessageProps) => {
  return (
    <>
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
    </>
  );
};

export default FeedBackMessage;
