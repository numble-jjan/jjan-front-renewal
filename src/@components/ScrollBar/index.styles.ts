import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const Track = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  background: none;
  width: 5px;
`;

export const Thumb = styled.div<{ height: number }>`
  top: 0;
  right: 0;
  position: absolute;
  background: #d9d9d9;
  border-radius: 3px;
  width: 5px;
  height: ${props => props.height}px;
`;
