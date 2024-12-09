import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Img() {
  const imgRef = useRef(null); // Create a reference to the image container

  useEffect(() => {
    const handleScroll = () => {
      const imgElement = imgRef.current;

      // Check if the element is in the viewport
      const rect = imgElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // If it's in the viewport, animate it from left to right only once
        gsap.to(imgElement, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "elastic",
        });
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial setup (to position the image off-screen to the left)
    gsap.set(imgRef.current, { x: "-100%", opacity: 0 });

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={imgRef}
      aria-label="CTA Image"
      className="hidden w-[40%] lg:grid place-content-center overflow-hidden rounded-xl"
    >
      <img
        src="ctaImg.webp"
        alt="CTA Image"
        className="bg-cover h-full w-full transform scale-x-[-1]" // mirror image as in the Figma design
      />
    </div>
  );
}

export default Img;
