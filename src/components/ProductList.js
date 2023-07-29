import Card from "@/shared/Card";
import { useRouter } from "next/router";
import React from "react";

const ProductList = ({ products }) => {
  const router = useRouter();
  return (
    <div className="">
      <div className="grid lg:grid-cols-3 justify-items-center md:grid-cols-2 content-start gap-10 sm:grid-cols-1">
        {products?.length > 0 &&
          products.map((product) => (
            <Card
              key={product?._id}
              propsObj={{
                product,
                action: () => {
                  router.push(`/productDetails/${product?.productId}`);
                },
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
