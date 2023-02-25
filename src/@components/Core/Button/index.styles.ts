import styled, { css } from "styled-components";
import { color, font } from "../../../styles/theme";

import type { ButtonProps, ButtonVariant } from "./index";

export const buttonHeight = {
  xs: "27px",
  m: "40px",
  l: "50px",
};

export const BUTTON_VARIANTS: Record<ButtonVariant, ReturnType<typeof css>> = {
  gray: css`
    background-color: ${color.dark_gray};
    color: ${color.white};
  `,
  whiteWithGray: css`
    background-color: ${color.white};
    border: 1px solid ${color.light_gray1};
    color: ${color.dark_gray};
  `,
  whiteWithPurple: css`
    background-color: ${color.white};
    border: 1px solid ${color.purple};
    color: ${color.purple};
  `,
  purple: css`
    background-color: ${color.purple};
    color: ${color.white};
    &:disabled {
      background-color: rgba(104, 60, 237, 0.3);
    }
  `,
};

export const Container = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => buttonHeight[height]};
  border: none;
  font-weight: ${font.weight.bold};

  ${prop => BUTTON_VARIANTS[prop.variant]}
`;
