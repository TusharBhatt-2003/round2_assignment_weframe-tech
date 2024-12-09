import React from "react";
import Counter from "./counter";
import AddToCartBtn from "./addToCartBtn";

const Btns = () => {
  return (
    <div
      id="product-btns"
      className="flex select-none pt-5 gap-2 items-center py-2 lg:w-[45vw] h-[10vh] border-t w-full"
    >
      <Counter />
      <AddToCartBtn />
    </div>
  );
};

export default Btns;
