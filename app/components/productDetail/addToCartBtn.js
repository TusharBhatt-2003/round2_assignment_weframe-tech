import React from "react";

const AddToCartBtn = () => {
  return (
    <div
      id="add-to-cart-btn"
      aria-label="Add to Cart"
      className="border uppercase font-semibold bg-[#5CD2DD] border-[#5CD2DD] hover:bg-white hover:text-[#5CD2DD] transition-all ease-in-out text-white rounded-lg w-full flex p-3 justify-around gap-5 items-center "
    >
      Ajouter au panier
    </div>
  );
};

export default AddToCartBtn;
