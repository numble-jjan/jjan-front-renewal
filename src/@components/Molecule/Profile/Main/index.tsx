import React, { ReactNode, isValidElement } from "react";

import Name from "../Name";
import Avartar from "../Avatar";
import Sub from "../Sub";
import Info from "../Info";
import * as Styled from "./index.styles";

import getComponentByType from "@/utils/getComponentByType";

import type { ProfileFormat } from "@/styles/theme";

const NameType = (<Name text="abc" />).type;
const AvartarType = (<Avartar src="" size="author" />).type;
const SubType = (<Sub text="" />).type;
const InfoType = (<Info />).type;

interface MainProps {
  children: ReactNode;
  format: ProfileFormat;
}

const Main = ({ children, format }: MainProps) => {
  const [avartarComponent] = getComponentByType(children, AvartarType);
  const [nameComponent] = getComponentByType(children, NameType);
  const [subComponent] = getComponentByType(children, SubType);
  const [infoComponent] = getComponentByType(children, InfoType);

  return (
    <Styled.Container format={format}>
      {avartarComponent}
      <Styled.Details>
        <Styled.Description>
          {nameComponent} {subComponent}
        </Styled.Description>
        {infoComponent}
      </Styled.Details>
    </Styled.Container>
  );
};

export default Main;
