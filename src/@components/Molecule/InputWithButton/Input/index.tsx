import React from "react";
import OriginInput from "@/@components/Atoms/Input";

//todo: 이후 기능 구현 단계에서 isValid를 Props로 받아야함
interface Props {
  placeholder: string;
}

const Input = ({ placeholder }: Props) => {
  return <OriginInput shape="border" placeholder={placeholder} isValid />;
};

export default Input;
