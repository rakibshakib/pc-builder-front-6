import ViewProductDetails from "@/components/ProductDetails";
import RootLayout from "@/components/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="container mx-auto my-5">
      <ViewProductDetails product={product} />
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://pc-builder-rs.onrender.com/get-single-product/${params?.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
