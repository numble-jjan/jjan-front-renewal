import React, { useRef } from "react";
import * as Styled from "./index.styles";

//todo : imageComponent로 받을 수 있는 컴포넌트를 제한하기
interface Props {
  imageComponent: JSX.Element;
  // type : svg | Image(custom img)
}

const Uploader = ({ imageComponent }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const clonedImageComponent = React.cloneElement(imageComponent);

  return (
    <Styled.Container>
      {clonedImageComponent}
      <input type="file" ref={hiddenFileInput} />
    </Styled.Container>
  );
};

export default Uploader;
