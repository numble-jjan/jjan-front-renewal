import styled from "styled-components";

import Text from "@/@components/Atoms/Text";
import { color, font } from "@/styles/theme";

export const Container = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
export const TextWithSpan = styled(Text)`
  & > span {
    color: ${color.purple};
    font-weight: ${font.weight.bold};
  }
`;
