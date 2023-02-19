import React, { forwardRef } from "react";

import type { Ref, InputHTMLAttributes } from "react";

import * as Styled from "./index.styles";

export type InputType = InputHTMLAttributes<HTMLInputElement>;
export type InputShape = "border" | "bottomLine";

const InputBase = forwardRef<HTMLInputElement, InputType>(
  (props: InputType, ref?: Ref<HTMLInputElement>) => {
    return <Styled.Root ref={ref} {...props} />;
  },
);

InputBase.displayName = "InputBase";

interface IProps extends InputType {
  isValid?: boolean;
  left?: string;
  right?: string;
  shape: InputShape;
  ref?: Ref<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  (props: IProps, ref?: Ref<HTMLInputElement>) => {
    const { shape, left, right, isValid } = props;
    return (
      <Styled.Container isValid={isValid} shape={shape}>
        {left && <Styled.LeftImage src={left} />}
        <InputBase ref={ref} {...props} />
        {right && <Styled.RightImage src={right} />}
      </Styled.Container>
    );
  },
);

Input.displayName = "Input";

export default Input;
