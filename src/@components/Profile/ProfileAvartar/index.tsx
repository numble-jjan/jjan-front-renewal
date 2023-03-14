import React from "react";

import Avartar from "@/@components/Core/Avartar";
import * as Styled from "./index.styles";

import { useProfileContext } from "../Main";

interface Props {
  src: string;
}

const ProfileAvartar = ({ src }: Props) => {
  const profile = useProfileContext();

  return (
    <Styled.Wrapper variant={profile}>
      <Avartar src={src} variant={profile} />
    </Styled.Wrapper>
  );
};

export default ProfileAvartar;
