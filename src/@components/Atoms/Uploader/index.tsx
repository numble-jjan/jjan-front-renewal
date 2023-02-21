import React, { useRef } from "react";
import * as Styled from "./index.styles";

//todo : imageComponent로 받을 수 있는 컴포넌트를 제한하기
interface Props {
  imageComponent: JSX.Element;
  // type : svg | Image(custom img)
}

const Uploader = ({ imageComponent }: Props) => {
  const hiddenInput = useRef<HTMLInputElement>(null);
  const onClickImage = () => {
    if (!hiddenInput.current) return;
    hiddenInput.current.click();
  };

  const clonedImageComponent = React.cloneElement(imageComponent, {
    onClick: onClickImage,
  });

  return (
    <Styled.Container>
      {clonedImageComponent}
      <input type="file" ref={hiddenInput} />
    </Styled.Container>
  );
};

export default Uploader;
