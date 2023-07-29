import ProductList from "@/components/ProductList";
import RootLayout from "@/components/RootLayout";
import { fetchDataByCategory } from "@/shared/apiHelper";
import React from "react";

const MonitorPages = ({ products }) => {
  return (
    <div className="container mx-auto">
      <h2 className="border-b-2 border-black text-md font-semibold mt-5">
        <span className="bg-black text-white px-2 inline-block">
          Monitors Collections
        </span>
      </h2>
      <ProductList products={products} />
    </div>
  );
};

export default MonitorPages;

MonitorPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const data = await fetchDataByCategory("Monitor");
  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};
