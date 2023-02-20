import styled from "styled-components";
import { color, font } from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > img {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
`;
export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 23px;
  margin-top: 21px;
  margin-bottom: 67px;
`;
export const Guides = styled.div`
  background-color: ${color.light_gray3};
  padding: 5px 20px;
  margin-bottom: 50px;
`;

export const Guide = styled.div`
  display: flex;
  padding: 15px 0;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 62px;
  height: 65px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
`;

export const GuideText = styled.div`
  flex: 1;
  font-size: ${font.size.f4};
  word-break: keep-all;
  line-height: 15px;
  & > span {
    font-weight: bold;
    color: ${color.purple};
  }
`;
