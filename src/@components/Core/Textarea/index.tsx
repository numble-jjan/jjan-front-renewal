import React from "react";
import * as Styled from "./index.styles";

interface Props {
  onChange?: () => void;
}

const Textarea = (props: Props) => {
  return <Styled.Container {...props} />;
};

export default Textarea;
