import React from "react";
import Text from "@/@components/Atoms/Text";

interface Props {
  text: string;
}

const Address = ({ text }: Props) => {
  return <Text variant="f4-regular">{text}</Text>;
};

export default Address;
