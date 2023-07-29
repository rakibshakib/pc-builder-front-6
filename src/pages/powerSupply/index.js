import RootLayout from "@/components/RootLayout";
import React from "react";

const PowerSupplyPages = () => {
  return <div>PowerSupplyPages</div>;
};

export default PowerSupplyPages;


PowerSupplyPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};