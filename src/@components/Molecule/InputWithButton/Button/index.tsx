import React from "react";
import OriginButton from "@/@components/Atoms/Button";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <OriginButton
      height="m"
      shape="purple"
      text={text}
      style={{ width: "28%" }}
    />
  );
};

export default Button;
