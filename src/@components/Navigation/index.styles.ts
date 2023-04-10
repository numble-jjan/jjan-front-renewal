import styled from "styled-components";
import FlexItem from "../Core/FlexItem";

export const Container = styled.div`
  position: relative;
`;
export const LastIcon = styled(FlexItem)`
  position: absolute;
  width: 20%;
  height: 70px;
  background: linear-gradient(135deg, #683ced 0%, #925ce9 100%);
  right: 0;
  bottom: 0;
`;
