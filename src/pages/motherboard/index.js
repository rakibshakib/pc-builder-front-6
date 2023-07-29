import RootLayout from "@/components/RootLayout";
import React from "react";

const MotherBoardPages = () => {
  return <div>MotherBoardPages</div>;
};

export default MotherBoardPages;

MotherBoardPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};