import React, { useRef } from "react";
// import styled from "styled-components";

//todo : imageComponent로 받을 수 있는 컴포넌트를 제한하기
interface Props {
  imageComponent: JSX.Element;
  // type : svg | Image(custom img)
}

const Uploader = ({ imageComponent }: Props) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const clonedImageComponent = React.cloneElement(imageComponent);

  return (
    <div>
      {clonedImageComponent}
      <input type="file" ref={hiddenFileInput} />
    </div>
  );
};

export default Uploader;
