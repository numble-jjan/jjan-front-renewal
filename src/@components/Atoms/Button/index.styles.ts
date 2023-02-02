import styled, { css } from "styled-components";
import { ButtonShape } from "./index";

import { color, font } from "../../../styles/theme";

export const Root = styled.button<{
  shape: ButtonShape;
  height: string;
  width?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  border: none;

  height: ${({ height }) => height};
  ${props => {
    switch (props.shape) {
      case "gray": {
        return css`
          background-color: ${color.dark_gray};
          color: ${color.white};
          font-weight: ${font.weight.bold};
        `;
      }
      case "whiteWithGray": {
        return css`
          background-color: ${color.white};
          border: 1px solid ${color.light_gray1};
          color: ${color.dark_gray};
          font-weight: ${font.weight.bold};
        `;
      }
      case "whiteWithPurple": {
        return css`
          background-color: ${color.white};
          border: 1px solid ${color.purple};
          color: ${color.purple};
          font-weight: ${font.weight.bold};
        `;
      }
      //default = "purple"
      default: {
        return css`
          background-color: ${color.purple};
          color: ${color.white};
          font-weight: ${font.weight.bold};
          &:disabled {
            background-color: rgba(104, 60, 237, 0.3);
          }
        `;
      }
    }
  }}
`;
