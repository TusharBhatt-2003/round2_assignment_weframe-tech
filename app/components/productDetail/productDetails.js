import { details } from "@/app/data/data";
import React, { useState } from "react";

const ProductDetails = () => {
  // State to track whether the heart is "liked" or not
  const [isLiked, setIsLiked] = useState(false);

  // Toggle the "liked" state
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="w-[80vw] lg:w-[45vw] lg:h-[65vh] py-5">
      <div className="flex justify-between">
        <h1 className='font-["playfair"] font-medium text-xl'>
          {details.name}
        </h1>
        <img
          src={isLiked ? "redHeart.svg" : "heart.svg"}
          alt="add to favourite"
          className="lg:w-7 lg:ml-2 cursor-pointer transition-all ease-in-out"
          onClick={toggleLike}
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold">{details.price}</p>
        <p className="text-[#9c9c9c] text-xs">/pièce</p>
      </div>
      <div className="flex justify-between text-sm font-medium border-y my-2 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src="scale.svg" className="w-5" />
            <div>
              {details.length} <sup className="font-light">cm</sup>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="area.svg" className="w-5" />
            <div>
              {details.area} <sup className="font-light">cm</sup>
            </div>
          </div>
        </div>
        <div className="text-[#9c9c9c] text-xs">
          RÉF:
          <span className="font-semibold">{details.model}</span>
        </div>
      </div>
      <ul className="text-[#5d5d5d]">
        {details.moreDetails.map((detailList, i) => {
          return <li key={i}>{detailList}</li>;
        })}
        <div className="mt-5">
          <p>{details.v}</p>
          <p>{details.w}</p>
        </div>
      </ul>
    </div>
  );
};

export default ProductDetails;
