import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

function ProductDisplay() {
  // Array for the images to be mapped
  const images = new Array(4).fill("table1.webp");

  // Ref to target all images
  const imagesRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the stacked images
    gsap.fromTo(
      imagesRef.current,
      { y: 100 }, // Initial state
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "elastic(1, .5)",
      }, // Final state
    );
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "displayItem.webp";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      id="product-display"
      aria-label="Product"
      className="flex justify-center items-center lg:h-[75vh] h-[35vh] w-full"
    >
      <div className="relative grid place-content-center bg-[#f8f6f4] rounded-lg w-[95%] h-[95%]">
        <img
          layout="responsive"
          width={96} // Aspect ratio for responsiveness
          height={96}
          placeholder="blur"
          blurDataURL="/displayItem-small.webp"
          src="displayItem.webp"
          alt="product"
          loading="lazy"
          aria-label="Product image"
          className="w-36 h-36 md:w-80 md:h-80 lg:w-96  lg:h-96 center drop-shadow-xl"
        />
        {/* Stacked Fading Images */}
        <div aria-label="Color Options" className="absolute p-2">
          {images.map((src, index) => (
            <motion.img
              loading="lazy"
              key={index}
              src={src}
              alt={`${index + 1}`}
              className="w-10 h-10 rounded mb-1"
              style={{
                opacity: 1 - index * 0.2, // Decreasing opacity for each image
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              ref={(el) => (imagesRef.current[index] = el)} // Add to ref array
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
