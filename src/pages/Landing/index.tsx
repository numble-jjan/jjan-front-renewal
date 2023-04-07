import React from "react";

import Layout from "@/@components/Layout";
import FlexBox from "@/@components/Core/Flexbox";

import Logo from "./Logo";
import Congratulations from "./Congratulations";
import Introduction from "./Introduction";
import SignUp from "./SignUp";

const Landing = () => {
  return (
    <Layout>
      <Layout.Content>
        <FlexBox
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Logo />
          <Congratulations />
          <Introduction />
          <SignUp />
        </FlexBox>
      </Layout.Content>
    </Layout>
  );
};

export default Landing;
