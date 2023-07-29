import RootLayout from "@/components/RootLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../store/Store";

const PcBuilder = () => {
  const [selected, setSelected] = useState([]);
  const router = useRouter();
  const { pcBuilderData } = useStateContext()?.state;

  const handleClick = (name) => {
    router.push({
      pathname: "/select-by-category",
      query: { name },
    });
  };
  useEffect(() => {
    setSelected(pcBuilderData?.filter((pc) => pc?.item?.productId));
  }, [pcBuilderData]);
  console.log(selected);
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
            className="flex justify-between items-center mt-5 h-[150px] px-5 shadow-md"
          >
            <div className="w-full">
              <h2 className="font-bold">{data?.name}</h2>
              {data?.item?.productId ? (
                <div className="text-[12px] rounded py-2 px-5 w-3/4 bg-yellow-100">
                  <p>
                    <s>Selected</s>
                  </p>
                  <h2 className="font-bold">{data?.item?.["Product Name"]}</h2>
                  <h2>Price: {data?.item?.["Price"]}</h2>
                </div>
              ) : (
                <></>
              )}
            </div>
            <button
              onClick={() => handleClick(data.name)}
              className="btn btn-sm"
            >
              Select
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          disabled={selected?.length < 5}
          onClick={() => console.log("build success")}
          className="btn btn-sm hover:bg-black hover:text-white bg-gray-800 text-white w-full"
        >
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
