import React from "react";
import { categories } from "./utils";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="my-5">
      <h2 className="border-b-2 border-black text-md font-semibold">
        <span className="bg-black text-white px-2 inline-block">
          All Categories
        </span>
      </h2>
      <div className="flex md:flex-row sm:flex-col items-center justify-between flex-wrap my-3 px-10">
        {categories.map((ctg) => (
          <Link key={ctg?.name} href={ctg?.to}>
            <div className="w-[120px]  shadow-md hover:shadow-xl rounded-md h-[100px] flex items-center justify-center cursor-pointer">
              <h2 className="text-center text-sm font-semibold">{ctg?.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
