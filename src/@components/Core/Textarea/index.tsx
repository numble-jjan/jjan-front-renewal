import React from "react";
import * as Styled from "./index.styles";

interface Props {
  rows?: number;
  onChange?: () => void;
}

const Textarea = (props: Props) => {
  return <Styled.Container {...props} />;
};

export default Textarea;
