import Image from "next/image";
import React from "react";
import style from "./card.module.css";
const rating = (stars, range) => "★".repeat(stars).padEnd(range, "✩");
const Card = ({ propsObj }) => {
  const { product, action } = propsObj;
  return (
    <div className={style.cardContainer}>
      <div
        className={style.innterContainer}
        //   className="flex flex-col items-start w-[400px] bg-blue-200">
      >
        <figure>
          <img
            src={product?.Image}
            alt="Shoes"
            width={250}
            height={180}
            // responsive="true"
          />
        </figure>
        <div className={style.cardDetails}>
          <h2>{product?.["Product Name"]}</h2>
          <p>
            Category: <span>{product?.Category}</span>
          </p>
          <p>
            Price: <span className={style.price}>{product?.Price}</span>
          </p>
          <p>
            Status:{" "}
            <span
              className={
                product?.Status == "In Stock" ? style.inStock : style.outStock
              }
            >
              {product?.Status}
            </span>{" "}
          </p>
          <p className={style.rating}>
            {rating(product?.["Average Rating"], 5)}
          </p>
        </div>
        <div className={style.cardAction}>
          <button onClick={action}>
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
