import styled from "styled-components";
import FlexBox from "@/@components/Core/Flexbox";

export const LastIcon = styled(FlexBox)`
  position: absolute;
  width: 20%;
  height: 70px;
  background: linear-gradient(135deg, #683ced 0%, #925ce9 100%);
  right: 0;
  bottom: 0;
  & > svg {
    width: 32px;
    height: 32px;
  }
`;
