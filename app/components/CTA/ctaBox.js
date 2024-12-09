import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ctaData } from "@/app/data/data";
import { motion } from "framer-motion";

function CtaBox() {
  const ctaBoxRef = useRef(null); // Create a reference to the CTA box

  useEffect(() => {
    const handleScroll = () => {
      const ctaBoxElement = ctaBoxRef.current;

      // Check if the element is in the viewport
      const rect = ctaBoxElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // If it's in the viewport, animate it from right to left only once
        gsap.to(ctaBoxElement, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "elastic",
        });
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial setup (to position the CTA box off-screen to the right)
    gsap.set(ctaBoxRef.current, { x: "100%", opacity: 0 });

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ctaBoxRef}
      aria-label="CTA Box"
      className='w-full lg:w-[60%] px-5 grid place-content-center font-["poppins"] rounded-xl bg-[#fff3f9]'
    >
      <div className="p-2 space-y-2">
        <h1
          aria-label="CTA Heading"
          className="text-3xl text-[#414141]  font-medium"
        >
          {ctaData.heading}{" "}
          <span className="text-[#63d4de]">{ctaData.percent}</span>
        </h1>
        <p aria-label="CTA Text" className="text-xs text-[#bda2b0]">
          {ctaData.para}
        </p>
      </div>
      <div className="flex gap-2 justify-between">
        <input
          placeholder={ctaData.placeholder}
          type="email"
          name="email"
          aria-label="Email Input"
          className="w-[70%] lg:w-[80%] p-2 rounded-lg border border-[#f5e1eb] outline-none placeholder:text-[#bda2b0]"
        />
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          aria-label="Subscribe Btn"
          className="w-[30%] lg:w-[20%] text-white uppercase text-xs flex justify-center items-center rounded-lg bg-[#5cd2dd]"
        >
          {ctaData.button}
          <img
            src="arrow-right.svg"
            alt="arrow right"
            className="rotate-180 w-4"
          />
        </motion.button>
      </div>
    </div>
  );
}

export default CtaBox;
