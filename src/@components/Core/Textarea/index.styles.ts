import styled from "styled-components";

/**
 * rows props이 존재한다면
 * 언제나 rows의 크기가 height보다 앞서서 적용됨
 */

export const Container = styled.textarea<{ rows?: number }>`
  width: 100%;
  height: ${({ rows }) => (rows ? "auto" : "100%")};
  word-break: keep-all;
  resize: none;
  white-space: normal;
`;
