import React, { useContext } from "react";

import Text from "@/@components/Core/Text";

import { profileContext } from "../Main";
import { MAIN_INFO } from "../textMap";
import type { Color } from "@/styles/theme";

interface Props {
  text: string;
  color?: Color;
}

const Name = ({ text, color }: Props) => {
  const profile = useContext(profileContext);

  return (
    <Text variant={MAIN_INFO[profile]} color={color || "black"}>
      {text}
    </Text>
  );
};

export default Name;
