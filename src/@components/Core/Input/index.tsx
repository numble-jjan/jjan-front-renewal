import React, { forwardRef } from "react";

import type { Ref, InputHTMLAttributes } from "react";

import * as Styled from "./index.styles";

export type InputType = InputHTMLAttributes<HTMLInputElement>;
export type InputShape = "border" | "bottomLine";

export const InputBase = forwardRef<HTMLInputElement, InputType>(
  (props: InputType, ref?: Ref<HTMLInputElement>) => {
    return <Styled.Root ref={ref} {...props} />;
  },
);

InputBase.displayName = "InputBase";

interface IProps extends InputType {
  isValid?: boolean;
  left?: React.FC<React.SVGProps<SVGSVGElement>>;
  right?: React.FC<React.SVGProps<SVGSVGElement>>;
  shape: InputShape;
  ref?: Ref<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  (props: IProps, ref?: Ref<HTMLInputElement>) => {
    const { shape, left, right, isValid } = props;
    const Left = left;
    const Right = right;

    return (
      <Styled.Container isValid={isValid} shape={shape}>
        {Left && <Left />}
        <InputBase ref={ref} {...props} />
        {Right && <Right />}
      </Styled.Container>
    );
  },
);

Input.displayName = "Input";

export default Input;
