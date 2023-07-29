import React from "react";

const SelectProductCard = ({ product }) => {
  return (
    <div className="px-5 py-5 shadow-md mt-4">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 content-start gap-10 sm:grid-cols-1">
        <div className="flex justify-start items-center">
          <figure className="h-[150px]">
            <img
              src={product?.Image}
              alt=""
              width={150}
              className="object-cover h-full w-full"
            />
          </figure>
        </div>
        <div className="lg:ml-4 md:ml-2 text-[12px]">
          <div>
            <h2 className="font-semibold">{product?.["Product Name"]}</h2>
            <p className="pt-2">
              <span className="font-semibold">Category:</span>{" "}
              {product?.Category}
            </p>
            <p className="pt-2">
              <span className="font-semibold">Status: </span>
              <span
                className={
                  product?.Status == "In Stock"
                    ? "bg-green-700 px-3 py-1 rounded-lg text-white"
                    : "bg-yellow-300 px-3 py-1 rounded-lg text-black"
                }
              >
                {product?.Status}
              </span>
            </p>
            <p className="pt-2 font-semibold">
              <span className="font-semibold">Price</span>: {product?.Price}
            </p>
            <p className="pt-2">
              <span className="font-semibold">Average Rating: </span>
              {product?.["Average Rating"]} (Out of 5 Stars)
            </p>
          </div>
          <button
            className="btn btn-sm mt-4 px-5 py-1 text-[12px]"
            onClick={() => console.log("add to buld")}
          >
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectProductCard;
