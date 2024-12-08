import React from "react";

function ProductDisplay() {
  // Array for the images to be mapped
  const images = new Array(4).fill("table.jpeg");

  return (
    <div className="grid place-content-center lg:h-[75vh] w-full">
      <div className="relative grid place-content-center bg-[#f8f6f4] rounded-lg w-[80vw] h-[30vh] lg:w-[45vw] lg:h-[70vh]">
        <img src="displayItem.png" className="w-[25vw] center drop-shadow-xl" />
        {/* Stacked Fading Images */}
        <div className="absolute p-2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${index + 1}`}
              className="w-10 rounded mb-1 hover:scale-110 transition-all ease-in-out"
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
