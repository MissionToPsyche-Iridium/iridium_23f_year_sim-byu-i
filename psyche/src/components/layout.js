// Authors: Brodie Busby
// Layout allows the app to have consistent styling over multiple pages for Header and Footer

import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;