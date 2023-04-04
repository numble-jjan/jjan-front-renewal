import React, { createContext, PropsWithChildren, useContext } from "react";
import * as Styled from "./index.styles";

import Header from "./Header";
import BottomNav from "./BottomNav";
import Content from "./Content";

import hasElementByType from "@/utils/hasElementByType";

interface LayoutContextType {
  hasHeader: boolean;
  hasBottom: boolean;
}
export const LayoutContext = createContext<LayoutContextType>({
  hasHeader: false,
  hasBottom: false,
});
export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  return context;
};

const HeaderType = (<Header title="" />).type;
const BottomNavType = (<BottomNav />).type;

const Main = ({ children }: PropsWithChildren) => {
  const hasHeader = hasElementByType(children, HeaderType);
  const hasBottomNav = hasElementByType(children, BottomNavType);

  return (
    <LayoutContext.Provider value={{ hasHeader, hasBottom: hasBottomNav }}>
      <Styled.Container>{children}</Styled.Container>
    </LayoutContext.Provider>
  );
};

const Layout = Object.assign(Main, {
  Header,
  BottomNav,
  Content,
});

export default Layout;
