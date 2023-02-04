import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid black;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  padding: 0.2rem;
  border-radius: 50%;
  margin-left: 0.25rem;
  & svg {
    stroke: white;
  }
`;
