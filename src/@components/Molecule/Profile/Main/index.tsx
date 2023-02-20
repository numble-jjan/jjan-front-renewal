import React, { createContext, ReactNode, useContext } from "react";

import Avartar from "../Avatar";
import LeftDetails from "../LeftDetails";
import RightDetails from "../RightDetails";

import * as Styled from "./index.styles";

import getComponentByType from "@/utils/getComponentByType";

import type { ProfileFormat } from "@/types/profile";

const AvartarType = (<Avartar src="" />).type;
const LeftDetailsType = (<LeftDetails />).type;
const RightDetailsType = (<RightDetails />).type;

export const profileContext = createContext<ProfileFormat>("profile");

export const useProfileContext = () => {
  const context = useContext(profileContext);

  if (!context) {
    throw new Error(
      "Profile compound components cannot be rendered outside the Profile component",
    );
  }

  return context;
};

interface Props {
  children: ReactNode;
  format: ProfileFormat;
}

const Main = ({ children, format }: Props) => {
  const avartar = getComponentByType(children, AvartarType);
  const leftDetails = getComponentByType(children, LeftDetailsType);
  const rightDetails = getComponentByType(children, RightDetailsType);

  return (
    <profileContext.Provider value={format}>
      <Styled.Container format={format}>
        {avartar}
        {leftDetails}
        {rightDetails}
      </Styled.Container>
    </profileContext.Provider>
  );
};

export default Main;
