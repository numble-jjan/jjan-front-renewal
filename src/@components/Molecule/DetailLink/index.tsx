import React, { ReactNode } from "react";
import { ReactComponent as Next } from "@/assets/icons/icon-next.svg";

import * as Styled from "./index.styles";

interface Props {
  children: ReactNode;
}

//todo : Container를 Link로 교체하기
const DetailLink = ({ children }: Props) => {
  return (
    <Styled.Container>
      <div>{children}</div>
      <Next />
    </Styled.Container>
  );
};
export default DetailLink;

/**
 * div로 children을 한 번 감싼 이유 :
 * 만약 children의 값으로
 * React.Fragment가 오게된다면
 * 스타일링이 깨지는 문제가 발생할 것 같기 때문입니다.
 */
