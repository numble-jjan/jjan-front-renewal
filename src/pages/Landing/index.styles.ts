import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > svg:first-child {
    margin-bottom: 44px;
  }
  & > button:last-child {
    margin-top: 65px;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div:first-child {
    margin-bottom: 14px;
  }
  & > :last-child {
    margin-top: 30px;
  }
`;

export const Alignment = styled.div<{ direction?: "column" | "row" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
`;
