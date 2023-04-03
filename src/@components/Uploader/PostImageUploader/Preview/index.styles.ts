import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 3.025rem;
  height: 3.025rem;
`;

export const AbsolutePosition = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Circle = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  top: 0.2rem;
  right: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.1rem;
  border-radius: 50%;
  margin-left: 0.25rem;
  & svg {
    stroke: white;
  }
`;
