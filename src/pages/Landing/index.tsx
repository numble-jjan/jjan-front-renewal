import React from "react";

import Layout from "@/@components/Layout";
import FlexBox from "@/@components/Core/Flexbox";

import Logo from "./Logo";
import Congratulations from "./Congratulations";
import Introduction from "./Introduction";
import SignUpButton from "./SignUpButton";

const Landing = () => {
  return (
    <Layout>
      <Layout.Content>
        <FlexBox
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height={"100%"}
        >
          <Logo />
          <Congratulations />
          <Introduction />
          <SignUpButton />
        </FlexBox>
      </Layout.Content>
    </Layout>
  );
};

export default Landing;
