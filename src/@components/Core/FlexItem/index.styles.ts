import styled from "styled-components";
import Base from "../Base";
import { Props } from "./index";

export const Container = styled(Base)<Props>(props => ({
  flex: props.flex,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  flexBasis: props.flexShrink,
}));
