import styled from "styled-components";

import { colorMap } from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.025rem;
  height: 3.025rem;
  border: 1px solid ${colorMap.light_gray1};
`;
