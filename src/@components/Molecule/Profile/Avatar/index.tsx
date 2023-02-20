import React from "react";

import AvartarInProfile from "@/@components/Atoms/Avatar";
import * as Styled from "./index.styles";

import { useProfileContext } from "../Main";

interface Props {
  src: string;
}

const Avatar = ({ src }: Props) => {
  const profile = useProfileContext();

  return (
    <Styled.Wrapper format={profile}>
      <AvartarInProfile src={src} size={profile} />
    </Styled.Wrapper>
  );
};

export default Avatar;
