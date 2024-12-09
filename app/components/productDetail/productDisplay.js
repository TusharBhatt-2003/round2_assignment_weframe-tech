import React from "react";

function ProductDisplay() {
  // Array for the images to be mapped
  const images = new Array(4).fill("table1.webp");

  return (
    <div
      id="product-display"
      aria-label="Product"
      className="grid place-content-center lg:h-[75vh] w-full"
    >
      <div className="relative grid place-content-center bg-[#f8f6f4] rounded-lg w-[80vw] h-[30vh] lg:w-[45vw] lg:h-[70vh]">
        <img
          src="displayItem.webp"
          alt="product"
          aria-label="Product image"
          className="w-[60vw] h-[30vh] md:w-[40vw] md:h-[30vh] lg:w-[25vw]  lg:h-[50vh] center drop-shadow-xl"
        />
        {/* Stacked Fading Images */}
        <div aria-label="Color Options" className="absolute p-2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${index + 1}`}
              className="w-10 h-10 rounded mb-1 hover:scale-110 transition-all ease-in-out"
              style={{
                opacity: 1 - index * 0.2, // Decreasing opacity for each image
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
