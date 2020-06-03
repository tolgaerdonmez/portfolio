import React from "react";
import Navbar from "./Navbar";
import "../sass/Layout.scss";

function Layout({ children }) {
  return (
    <>
      <Navbar fullwidth={true} />
      <div className="layout-container">{children}</div>
    </>
  );
}

export default Layout;
