import React, { useContext } from "react";

import Text from "@/@components/Atoms/Text";

import { profileContext } from "../Main";
import { MAIN_INFO } from "../textMap";

import { color as fontColor } from "@/styles/theme";
import type { Color } from "@/styles/theme";

interface Props {
  text: string;
  color?: Color;
}

const Name = ({ text, color }: Props) => {
  const profile = useContext(profileContext);

  return (
    <Text variant={MAIN_INFO[profile]} color={color || fontColor.black}>
      {text}
    </Text>
  );
};

export default Name;
