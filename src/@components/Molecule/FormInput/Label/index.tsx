import React from "react";

import Text from "@/@components/Atoms/Text";

interface LabelProps {
  text: string;
  isRequired?: boolean;
}

const Label = ({ text, isRequired }: LabelProps) => {
  return (
    <Text variant="f4-regular" style={{ display: "inline" }}>
      {text}
      {isRequired && (
        <Text color="purple" variant="f4-regular" style={{ display: "inline" }}>
          *
        </Text>
      )}
    </Text>
  );
};

export default Label;
