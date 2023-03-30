import React, { PropsWithChildren } from "react";

import Header from "./Header";
import BottomNav from "./BottomNav";
import Content from "./Content";

const Main = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const Layout = Object.assign(Main, {
  Header,
  BottomNav,
  Content,
});

export default Layout;
