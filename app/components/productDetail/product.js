import React from "react";
import ProductDisplay from "./productDisplay";
import Description from "./description";

const Product = () => {
  return (
    <div className="h-fit lg:h-screen lg:flex">
      <div className="lg:w-1/2 h-full">
        <ProductDisplay />
        <Description />
      </div>
      <div className="lg:w-1/2 h-screen border "></div>
    </div>
  );
};

export default Product;
