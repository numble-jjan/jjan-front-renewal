import React from "react";

import Text from "@/@components/Atoms/Text";

interface NameProps {
  text: string;
}

const Name = ({ text }: NameProps) => {
  return <Text>{text}</Text>;
};

export default Name;
