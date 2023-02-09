import React, { ReactNode } from "react";

interface InfoProps {
  children?: ReactNode;
}

const Info = ({ children }: InfoProps) => {
  return <div>{children}</div>;
};

export default Info;
