import React from "react";
import ProductDisplay from "./productDisplay";
import Description from "./description";
import ProductDetails from "./productDetails";
import Btns from "./btns";
import FAQ from "./faq";

const Product = () => {
  return (
    <div className="h-fit mt-10 lg:mt-0 items-center lg:h-screen lg:flex">
      <div className="lg:w-1/2  h-fit lg:h-full">
        <ProductDisplay />
        <Description />
      </div>
      <div className="lg:w-1/2 h-fit lg:h-screen grid place-content-center lg:place-content-start">
        <ProductDetails />
        <Btns />
        <FAQ />
      </div>
    </div>
  );
};

export default Product;
