import RootLayout from "@/components/RootLayout";
import SelectProductCard from "@/components/SelectProductCard";
import { fetchDataByCategory } from "@/shared/apiHelper";
import React from "react";

const SelectPc = ({ products }) => {
  return (
    <div className="container mx-auto">
      <h2 className="border-b-2 border-black text-md font-semibold">
        <span className="bg-black text-white px-2 inline-block">
          Select Item
        </span>
      </h2>
      <div>
        {products?.length > 0 &&
          products?.map((product) => (
            <SelectProductCard key={product?._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default SelectPc;

SelectPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ query }) => {
  const data = await fetchDataByCategory(query?.name);
  return {
    props: {
      products: data,
    },
  };
};
