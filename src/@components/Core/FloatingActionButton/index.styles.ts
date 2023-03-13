import styled, { css } from "styled-components";
import { color } from "@/styles/theme";
import type { Props, FabVariant } from "./index";

type ContainerProps = Omit<Props, "onClick" | "element">;

const fabVariant: Record<FabVariant, ReturnType<typeof css>> = {
  small: css`
    width: 40px;
    height: 40px;
    border: 1px solid ${color.light_gray1};
  `,
  medium: css`
    width: 50px;
    height: 50px;
    background-color: ${color.purple};
  `,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${prop => fabVariant[prop.variant]}
`;
