import React from "react";
import { BaseProps } from "../Base/index";
import { Property } from "csstype";

import * as Styled from "./index.styles";

export interface Props extends BaseProps {
  flex?: Property.Flex;
  flexShrink?: Property.FlexShrink;
  flexGrow?: Property.FlexGrow;
  flexBasis?: Property.FlexBasis;
}

const FlexItem = (props: Props) => {
  return <Styled.Container {...props} />;
};

export default FlexItem;
