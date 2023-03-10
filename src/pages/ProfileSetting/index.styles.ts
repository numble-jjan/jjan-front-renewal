import styled from "styled-components";

import Text from "@/@components/Atoms/Text";
import { font, color } from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 18px;
`;

export const TextWithSpan = styled(Text)`
  & > span {
    color: ${color.purple};
    font-weight: ${font.weight.bold};
  }
`;
export const SettingLocation = styled.div``;
