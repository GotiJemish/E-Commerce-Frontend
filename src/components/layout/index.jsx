import React from "react";
import Header from "./header";
// import Sidebar from "./sidebar";
import "./index.css";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <main className="">
        {children}
      </main>
     <Footer/>
    </>
  );
};

export default Layout;
