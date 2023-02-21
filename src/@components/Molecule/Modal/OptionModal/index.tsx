import React from "react";
import styled from "styled-components";

import Divider from "@/@components/Atoms/Divider";
import { ReactComponent as Cancel } from "../../../../assets/icons/icon-cancel.svg";

import { color } from "../../../../styles/theme";

interface OptionModalProps {
  options: string[];
  // onClickOption:
}

const OptionModal = ({ options }: OptionModalProps) => {
  return (
    <Container>
      <Header>
        더보기
        <Cancel />
      </Header>
      <Divider color={color.light_gray1} />
      {options.map((option, index, self) => (
        <React.Fragment key={index}>
          <div>{option}</div>
          {self.length !== index + 1 && <Divider color={color.light_gray1} />}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default OptionModal;

const Container = styled.div`
  & > div:nth-child(odd) {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Header = styled.div`
  position: relative;
  font-weight: bold;
  & svg {
    width: 0.725rem;
    height: 0.725rem;
    position: absolute;
    right: 0;
    margin-right: 1rem;
    stroke: black;
    font-weight: normal;
  }
`;
