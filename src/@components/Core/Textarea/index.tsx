import React from "react";
import * as Styled from "./index.styles";

interface Props {
  rows: number;
  onChange?: () => void;
}

const Textarea = ({ rows, ...props }: Props) => {
  return <Styled.Container rows={rows} {...props} />;
};

export default Textarea;
