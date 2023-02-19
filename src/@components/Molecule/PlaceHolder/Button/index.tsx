import React from "react";

import RootButton from "@/@components/Atoms/Button";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <RootButton
      height="m"
      shape="whiteWithPurple"
      text={text}
      style={{
        width: "8.75rem",
        marginTop: "0.250rem",
      }}
    />
  );
};

export default Button;
