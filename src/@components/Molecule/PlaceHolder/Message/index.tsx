import React from "react";

import Text from "@/@components/Atoms/Text";

// interface Props {
//   children: string;
// }

const Message = ({ children }: React.PropsWithChildren) => {
  return (
    <Text
      variant="f3-regular"
      color="dark_gray"
      style={{
        lineHeight: "20px",
      }}
    >
      {children}
    </Text>
  );
};

export default Message;
