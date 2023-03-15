import React from "react";
import * as Styled from "./index.styles";

interface Props {
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea = (props: Props) => {
  return <Styled.Container {...props} />;
};

export default Textarea;
