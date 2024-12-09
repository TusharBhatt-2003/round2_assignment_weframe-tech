import { useState } from "react";

const ProductCard = () => {
  // State to track whether the heart is "liked" or not
  const [isLiked, setIsLiked] = useState(false);

  // Toggle the "liked" state
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      id="product-card"
      aria-label="Product Card"
      className='font-["poppins"] lg:p-2'
    >
      <div className="bg-[#f9f7f5] rounded-xl mb-2">
        <div className="flex justify-between items-center px-2 pt-2">
          {/* Heart icon that toggles */}
          <img
            role="button"
            src={isLiked ? "redHeart.svg" : "heart.svg"}
            alt="add to favourite"
            className="lg:w-7 lg:ml-2 cursor-pointer transition-all ease-in-out"
            onClick={toggleLike}
          />
          <p
            aria-label="tag"
            className="text-black bg-white text-[0.5rem] lg:text-xs rounded-md px-2 py-1 font-semibold"
          >
            ART DE LA TABLE
          </p>
        </div>
        <div className="w-full p-5 grid place-content-center">
          <img
            aria-label="Product Image"
            src="table.webp"
            className="w-36 h-36 drop-shadow-lg"
            alt="Table"
          />
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center px-2">
          <h3
            aria-label="title"
            className="text-2xl text-[#393939] font-['playfair']"
          >
            Title
          </h3>
          <h1
            aria-label="price"
            className="text-xl text-[#393939] font-semibold"
          >
            0<sup className="font-normal">€</sup>
          </h1>
        </div>
        <div className="flex items-center justify-between p-2">
          <p
            aria-label="price per Piece"
            className="text-[#9c9c9c] text-[0.5rem] lg:text-xs"
          >
            0,35€/Pièce · RÉF : VABGN5
          </p>
          <p
            aria-label="stock"
            className="text-[#546A7D] bg-[#F1F4F6] font-['poppins'] lg:px-2 p-1 rounded-xl text-[0.5rem] lg:text-xs"
          >
            20 pièces
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
