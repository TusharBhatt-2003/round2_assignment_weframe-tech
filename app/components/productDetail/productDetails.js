import { details } from "@/app/data/data";
import { motion } from "framer-motion";
import React, { useState } from "react";

const ProductDetails = () => {
  // State to track whether the heart is "liked" or not
  const [isLiked, setIsLiked] = useState(false);

  // Toggle the "liked" state
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div id="product-detail" className="w-[80vw] lg:w-[45vw] lg:h-[65vh] py-5">
      <div className="flex justify-between">
        <h1
          aria-label="Product Name"
          className='font-["playfair"] font-medium text-xl'
        >
          {details.name}
        </h1>

        <motion.img
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 10,
          }}
          role="button"
          aria-label="Add to Favourite"
          src={isLiked ? "redHeart.svg" : "heart.svg"}
          alt="add to favourite"
          className="lg:w-7 lg:ml-2 cursor-pointer "
          onClick={toggleLike}
        />
      </div>
      <div className="flex items-center gap-2">
        <p aria-label="Price" className="text-sm font-semibold">
          {details.price}
        </p>
        <p aria-label="per piece" className="text-[#9c9c9c] text-xs">
          /pièce
        </p>
      </div>
      <div className="flex justify-between text-sm font-medium border-y my-2 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src="scale.svg" alt="length" className="w-5" />
            <div aria-label="length">
              <p>
                {details.length}
                <sup className="font-light">cm</sup>
              </p>
            </div>
          </div>
          <div aria-label="area" className="flex items-center gap-2">
            <img src="area.svg" alt="area" className="w-5" />
            <div>
              <p>
                {details.area} <sup className="font-light">cm</sup>
              </p>
            </div>
          </div>
        </div>
        <div aria-label="model" className="text-[#9c9c9c] text-xs">
          RÉF:
          <span className="font-semibold">{details.model}</span>
        </div>
      </div>
      <ul className="text-[#5d5d5d]">
        {details.moreDetails.map((detailList, i) => {
          return <li key={i}>{detailList}</li>;
        })}
      </ul>
      <div aria-label="power" className="mt-5 text-[#5d5d5d]">
        <p>{details.v}</p>
        <p>{details.w}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
