import styled from "styled-components";
import { color } from "@/styles/theme";

export const Container = styled.div`
  width: 100%;
  margin-top: 36px;
  & > ul {
    margin-top: 10px;
    list-style-type: disc;
    list-style-position: inside;
  }
  & > ul > li {
    padding: 0;
    margin: 0;
  }
  & > ul > li::marker {
    content: "• ";
    color: ${color.gray};
  }
  & > ul > li > div {
    display: inline;
  }
`;
