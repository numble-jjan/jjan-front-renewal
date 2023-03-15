import styled from "styled-components";

export const Container = styled.div`
  & > div:not(:first-child) {
    padding-left: 3.125rem;
  }
  & > div:not(:last-child) {
    margin-bottom: 0.625rem;
  }
`;
