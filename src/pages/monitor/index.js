import RootLayout from "@/components/RootLayout";
import React from "react";

const MonitorPages = () => {
  return <div>MonitorPages</div>;
};

export default MonitorPages;

MonitorPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};