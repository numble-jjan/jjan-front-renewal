import React from "react";

import { useNavigate } from "react-router-dom";
import Button from "@/@components/Core/Button";
import Text from "@/@components/Core/Text";

const SignUp = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate("/auth/signup");

  return (
    <Button variant="purple" height="l" onClick={clickHandler}>
      <Text variant="f3-bold" color="white">
        JJAN 회원가입
      </Text>
    </Button>
  );
};

export default SignUp;
