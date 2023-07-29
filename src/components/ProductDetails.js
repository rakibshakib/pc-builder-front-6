import React from "react";
export const rating = (stars, range) => "★".repeat(stars).padEnd(range, "✩");
const ViewProductDetails = ({ product }) => {
  const reviews = [
    {
      user: "TechEnthusiast",
      rating: 5,
      comment:
        "The TechPro CPU 5000 is a beast! Excellent performance and great value.",
    },
    {
      user: "PCBuilder",
      rating: 4.5,
      comment: "Solid processor for gaming and multitasking.",
    },
    {
      user: "TechReviewer",
      rating: 4,
      comment: "Good CPU, but it can get a bit hot under heavy loads.",
    },
  ];
  const keyValuePairElements = renderKeyValuePairs(product?.["Key Features"]);

  return (
    <div>
      <div className="grid lg:grid-cols-2 justify-items-center md:grid-cols-2 content-start gap-10 sm:grid-cols-1">
        <div className="flex justify-start items-center">
          <figure>
            <img src={product?.Image} alt="" width={300} />
          </figure>
        </div>
        <div className="lg:ml-4 md:ml-2">
          <div>
            <h2 className="text-md font-semibold">
              {product?.["Product Name"]}
            </h2>
            <p className="pt-2">
              <span className="font-semibold">Category:</span>{" "}
              {product?.Category}
            </p>
            <p className="pt-2">
              <span className="font-semibold">Status: </span>
              <span
                className={
                  product?.Status == "In Stock"
                    ? "bg-green-700 px-3 py-1 text-[12px] rounded-lg text-white"
                    : "bg-yellow-300 px-3 py-1 text-[12px] rounded-lg text-black"
                }
              >
                {product?.Status}
              </span>
            </p>
            <p className="pt-2 text-md font-semibold">
              <span className="font-semibold">Price</span>: {product?.Price}
            </p>
            <p className="pt-2 text-md">
              <span className="font-semibold">Description: </span>{" "}
              {product?.Description}
            </p>
            <div className="flex ">
              <p className="font-semibold">Key Features: </p>
              <div className="ml-2">{keyValuePairElements}</div>
            </div>
            <p className="pt-2 text-md">
              <span className="font-semibold">Individual Rating: </span>{" "}
              {product?.["Individual Rating"]} (Out of 5 Stars)
            </p>
            <p className="pt-2 text-md">
              <span className="font-semibold">Average Rating: </span>
              {product?.["Average Rating"]} (Out of 5 Stars)
            </p>
          </div>
        </div>
      </div>
      <h2 className="border-b-2 border-black text-md font-semibold my-3">
        <span className="bg-black text-white px-2 inline-block">Reviews</span>
      </h2>
      <div>
        {product?.Reviews?.map((rev) => {
          return (
            <div key={rev?.user} className="border-b-2 border-gray-300 py-4">
              <div className="flex items-center">
                <h2 className="text-md font-semibold">{rev?.user}</h2>
                <p className="ml-4">{rating(rev?.rating, 5)}</p>
              </div>
              <p className="text-[13px] mt-3">{rev?.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewProductDetails;

export const renderKeyValuePairs = (obj) => {
  return Object.entries(obj).map(([key, value]) => (
    <div key={key}>
      <span className="font-[600] text-[12px]">{key}:</span>
      <span className="text-[12px] ml-2">{value}</span>
    </div>
  ));
};
