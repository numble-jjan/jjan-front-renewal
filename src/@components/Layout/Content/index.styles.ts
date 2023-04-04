import styled from "styled-components";

export const Container = styled.div<{ hasHeader: boolean; hasBottom: boolean }>`
  /**
  * margin-bottom이 원하는 방식으로 작동하지 않아서 height값을 수정합니다.
  * 110px = NavIcon(60px) + Header(48px) + g,q와 같은 폰트가 가려지는 걸 막기위한 추가 여유분(2px)
  */
  height: ${({ hasBottom, hasHeader }) => {
    if (hasHeader && hasBottom) return `calc(100% - 110px)`;
    if (!hasHeader && hasBottom) return `calc(100% - 62px)`;
    if (hasHeader && !hasBottom) return `calc(100% - 48px)`;
    return `100%`;
  }};
  padding: 0rem 1rem;
  margin-top: ${({ hasHeader }) => (hasHeader ? `48px` : `0px`)};
  overflow: scroll;

  /* safari, chrome */
  &::-webkit-scrollbar {
    display: none;
  }
  /* firfox */
  scrollbar-width: none;
`;
