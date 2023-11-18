import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <section className="bg-[#ecfdff]">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
