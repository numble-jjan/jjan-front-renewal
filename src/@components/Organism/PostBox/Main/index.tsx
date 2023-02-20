import React, { ReactNode } from "react";

import LocationHeader from "../LocationHeader";
import CommunityHeader from "../CommunityHeader";
import Body from "../Body";
import Bottom from "../Bottom";
import * as Styled from "./index.styles";

import getComponentByType from "@/utils/getComponentByType";

const LocationHeaderType = (<LocationHeader location="" />).type;
const CommunityHeaderType = (<CommunityHeader date="" likes="" />).type;
const BodyType = (<Body text="" />).type;
const BottomType = (<Bottom text="" />).type;

interface Props {
  children: ReactNode;
}

// todo : header 값을 고정할 필요가 있을까?
// 만약 아니라면
const Main = ({ children }: Props) => {
  const locationHeader = getComponentByType(children, LocationHeaderType);
  const communityHeader = getComponentByType(children, CommunityHeaderType);
  const body = getComponentByType(children, BodyType);
  const bottom = getComponentByType(children, BottomType);

  return (
    <Styled.Container>
      {communityHeader}
      {locationHeader}
      <Styled.Content>
        {body}
        {bottom}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Main;
