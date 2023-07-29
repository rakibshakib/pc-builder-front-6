import RootLayout from "@/components/RootLayout";
import React from "react";

const OtherDevices = () => {
  return <div>OtherDevices</div>;
};

export default OtherDevices;

OtherDevices.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};