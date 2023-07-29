import React from "react";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
};

export default RootLayout;
