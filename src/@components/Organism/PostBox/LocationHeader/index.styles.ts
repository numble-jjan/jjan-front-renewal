import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  padding: 0.75rem;
  align-items: center;
  & > svg {
    margin-right: 7px;
  }
`;
