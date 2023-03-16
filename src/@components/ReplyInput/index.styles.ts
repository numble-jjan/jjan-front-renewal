import styled from "styled-components";

import FlexBox from "../Core/Flexbox";
import CoreTextArea from "../Core/Textarea";
import Text from "../Core/Text";

import { color } from "@/styles/theme";

export const Container = styled(FlexBox)`
  padding: 15px;
`;

export const AvartarWrapper = styled.div`
  margin-right: 8px;
`;
export const TextContainer = styled(FlexBox)`
  box-sizing: border-box;
  border: 1px solid ${color.light_gray1};
`;
export const Textarea = styled(CoreTextArea)`
  flex: 1;
`;
export const Button = styled(Text)`
  cursor: pointer;
`;
