import styled from "styled-components";
import { profileStyles } from "@/styles/theme";
import type { ProfileFormat } from "@/styles/theme";

export const Container = styled.div<{ format: ProfileFormat }>`
  display: flex;
  width: 100%;
  & > img {
    padding-right: ${({ format }) => profileStyles[format].imgPadding};
  }
`;
export const Details = styled.section`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;
export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 17px;
`;
