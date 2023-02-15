import React, { useContext } from "react";
import * as Styled from "./index.styles";

import { profileContext } from "../Main";

interface Props {
  children?: React.ReactNode;
}

const LeftDetails = ({ children }: Props) => {
  const profile = useContext(profileContext);

  return <Styled.Container format={profile}>{children}</Styled.Container>;
};
export default LeftDetails;
