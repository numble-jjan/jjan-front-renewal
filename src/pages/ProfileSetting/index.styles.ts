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
export const AvartarContainer = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;
export const Guide = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
export const SettingNickname = styled.div`
  width: 100%;
  margin-top: 36px;
  & > ul {
    margin-top: 10px;
    list-style-type: disc;
    list-style-position: inside;
  }
  & > ul > li {
    padding: 0;
    margin: 0;
  }
  & > ul > li::marker {
    content: "• ";
    color: ${color.gray};
  }
  & > ul > li > div {
    display: inline;
  }
`;
export const SettingLocation = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 50px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28px;
  height: 28px;
  background-color: ${color.purple};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
