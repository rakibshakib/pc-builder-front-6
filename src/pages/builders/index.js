import RootLayout from "@/components/RootLayout";
import { useRouter } from "next/router";
import React from "react";

export const pcBuilderData = [
  { name: "CPU / Processor", to: "/select-by-category", item: {} },
  { name: "Motherboard", to: "/select-by-category", item: {} },
  { name: "RAM", to: "/select-by-category", item: {} },
  { name: "Power Supply Unit", to: "/select-by-category", item: {} },
  { name: "Storage Device", to: "/select-by-category", item: {} },
  { name: "Monitor", to: "/select-by-category", item: {} },
];

const PcBuilder = () => {
  const router = useRouter();

  const handleClick = (name) => {
    router.push({
      pathname: "/select-by-category",
      query: { name },
    });
  };
  const query = router?.query;
  return (
    <div className="container mx-auto">
      <h2 className="border-b-2 border-black text-sm font-semibold">
        <span className="bg-black text-white px-2 inline-block">
          Build Your Own PC
        </span>
      </h2>
      <div>
        {pcBuilderData?.map((data) => (
          <div
            key={data?.name}
            className="flex justify-between items-center mt-3 h-[80px] px-5 shadow-md"
          >
            <h2>{data?.name}</h2>
            <button
              onClick={() => handleClick(data.name)}
              className="btn btn-sm"
            >
              Select
            </button>
          </div>
        ))}
{/* 
        <div className="flex justify-between items-center mt-3 h-[80px] px-5 shadow-md">
          <h2>Motherboard</h2>
          <button className="btn btn-sm">Select</button>
        </div>
        <div className="flex justify-between items-center mt-3 h-[80px] px-5 shadow-md">
          <h2>RAM</h2>
          <button className="btn btn-sm">Select</button>
        </div>
        <div className="flex justify-between items-center mt-3 h-[80px] px-5 shadow-md">
          <h2>Power Supply Unit</h2>
          <button className="btn btn-sm">Select</button>
        </div>
        <div className="flex justify-between items-center mt-3 h-[80px] px-5 shadow-md">
          <h2>Storage Device</h2>
          <button className="btn btn-sm">Select</button>
        </div>
        <div className="flex justify-between items-center mt-3 h-[80px] px-5 shadow-md">
          <h2>Monitor</h2>
          <button className="btn btn-sm">Select</button>
        </div> */}
      </div>
      <div className="mt-4">
        <button className="btn btn-sm hover:bg-black hover:text-white bg-gray-800 text-white w-full">
          Complete Build{" "}
        </button>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
