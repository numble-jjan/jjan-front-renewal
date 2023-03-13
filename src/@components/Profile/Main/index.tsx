import React, { createContext, ReactNode, useContext } from "react";

import Avartar from "../ProfileAvartar";
import LeftDetails from "../LeftDetails";
import RightDetails from "../RightDetails";
import * as Styled from "./index.styles";

import getComponentByType from "@/utils/getComponentByType";
import type { ProfileVariant } from "../types";

const AvartarType = (<Avartar src="" />).type;
const LeftDetailsType = (<LeftDetails />).type;
const RightDetailsType = (<RightDetails />).type;

export const profileContext = createContext<ProfileVariant>("profile");
export const useProfileContext = () => {
  const context = useContext(profileContext);

  if (!context) {
    throw new Error(
      "Profile compound components cannot be rendered outside the Profile component",
    );
  }

  return context;
};

export interface Props {
  children: ReactNode;
  variant: ProfileVariant;
}

const Main = ({ children, variant }: Props) => {
  const avartar = getComponentByType(children, AvartarType);
  const leftDetails = getComponentByType(children, LeftDetailsType);
  const rightDetails = getComponentByType(children, RightDetailsType);

  return (
    <profileContext.Provider value={variant}>
      <Styled.Container>
        {avartar}
        {leftDetails}
        {rightDetails}
      </Styled.Container>
    </profileContext.Provider>
  );
};

export default Main;
