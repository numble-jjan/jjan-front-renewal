import styled, { css } from "styled-components";
import { color, font } from "../../../styles/theme";

import type { ButtonProps } from "./index";
import type { ButtonVariant } from "./types";

export const buttonHeight = {
  xs: "27px",
  m: "40px",
  l: "50px",
};

export const buttonVariant: Record<ButtonVariant, ReturnType<typeof css>> = {
  gray: css`
    background-color: ${color.dark_gray};
    color: ${color.white};
  `,
  white: css`
    background-color: ${color.white};
    color: ${color.purple};
    &:disabled {
      color: rgba(104, 60, 237, 0.3);
    }
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

export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => buttonHeight[height]};
  border: none;
  font-weight: ${font.weight.bold};

  ${prop => buttonVariant[prop.variant]}
`;
