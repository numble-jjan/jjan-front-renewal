import styled from "styled-components";
import { Props } from "./index";

export const Container = styled.div<Props>(props => ({
  flex: props.flex,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  flexBasis: props.flexShrink,
}));
