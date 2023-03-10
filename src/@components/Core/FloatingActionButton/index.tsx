import React from "react";

import { ReactComponent as IconWrite } from "@/assets/icons/icon-write.svg";
import { ReactComponent as IconUp } from "@/assets/icons/icon-up.svg";
import * as Styled from "./index.styles";

export type FabVariant = "write" | "up";
export interface Props {
  variant: FabVariant;
  onClick?: () => void;
}

const FloatingActionButton = ({ onClick, variant, ...props }: Props) => {
  return (
    <Styled.Container variant={variant} onClick={onClick} {...props}>
      {variant === "write" && <IconWrite />}
      {variant === "up" && <IconUp />}
    </Styled.Container>
  );
};

export default FloatingActionButton;
