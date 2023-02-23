import styled from "styled-components";
import Text from "@/@components/Atoms/Text";
import { color, font } from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 50px;
`;

export const TextWithSpan = styled(Text)`
  & > span {
    color: ${color.purple};
    font-weight: ${font.weight.bold};
  }
`;
