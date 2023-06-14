import React from "react";
import { ContentWrapper, LayoutContainer } from "./Layout.styles";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
