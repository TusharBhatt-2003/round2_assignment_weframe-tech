import React, { useRef } from "react";
import Productcard from "./productCard";

const SimilarProduct = () => {
  // Ref to the scrollable container
  const containerRef = useRef(null);

  // Function to slide left
  const slideLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth / 5,
        behavior: "smooth",
      });
    }
  };

  // Function to slide right
  const slideRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth / 5,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="similar-items"
      aria-label="Similar Items"
      className="px-5 w-full relative bg-[#fdfbfb] "
    >
      <div className="flex items-center justify-between py-4">
        <h2 className="font-['poppins'] text-xl">Articles similaires</h2>
        <a
          href="link"
          aria-label="link"
          className="text-xs underline underline-offset-2 uppercase font-medium"
        >
          Voir toute la collection
        </a>
      </div>
      {/* Scrollable container */}
      <div
        className="overflow-hidden overflow-x-scroll scroll-smooth"
        ref={containerRef}
      >
        <div aria-label="Similar Products" className="flex w-fit gap-1 ">
          {Array(9)
            .fill(0)
            .map(
              (
                _,
                index, // Use index as a fallback for keys
              ) => (
                <div
                  aria-label="Product Card"
                  key={index}
                  className="w-[45vw] lg:w-[25vw]"
                >
                  <Productcard />
                </div>
              ),
            )}
        </div>
      </div>
      {/* Left Button */}
      <button
        onClick={slideLeft}
        className="hidden  absolute top-1/2 left-0 transform -translate-y-1/2 w-7 h-7 bg-[#5CD2DD] lg:grid place-content-center"
      >
        <img src="/arrow-right.svg" alt="left-arrow" className="w-5" />
      </button>

      {/* Right Button */}
      <button
        onClick={slideRight}
        className="hidden  absolute top-1/2 right-0 transform -translate-y-1/2 w-7 h-7 bg-[#5CD2DD] lg:grid place-content-center"
      >
        <img
          src="/arrow-right.svg"
          className="rotate-180 w-5"
          alt="right-arrow"
        />
      </button>
    </section>
  );
};

export default SimilarProduct;
