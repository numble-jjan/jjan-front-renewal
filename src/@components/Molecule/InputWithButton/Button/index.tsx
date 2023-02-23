import React from "react";
import OriginButton from "@/@components/Atoms/Button";
import { font } from "@/styles/theme";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <OriginButton
      height="m"
      shape="purple"
      text={text}
      style={{ width: "28%", fontWeight: font.weight.regular }}
    />
  );
};

export default Button;
