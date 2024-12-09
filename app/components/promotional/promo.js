"use client";
import { promoData } from "@/app/data/data";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Promo() {
  const controls = useAnimation(); // Framer Motion animation controls
  const sectionRef = useRef(null); // Reference for the Promo section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible"); // Start animation when visible
        }
      },
      { threshold: 0.5 }, // Trigger animation when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, [controls]);

  // Animation Variants for Promo Icons
  const promoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.1 }, // Initial state
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="promo"
      aria-label="Promo"
      ref={sectionRef} // Attach the ref to the section
      className="w-full grid place-content-center lg:h-[65vh] bg-gradient-to-b from-[#fef7fb] to-white p-5"
    >
      <div className="space-y-14">
        <div className="text-center space-y-3 py-5">
          <h1
            aria-label="Promo Heading"
            className="text-4xl text-[#393939] font-medium font-['poppins']"
          >
            On s’occupe de{" "}
            <span className="font-bold text-[#5cd2dd]">tout</span>
          </h1>
          <p aria-label="Promo Text" className="text-[#9C9C9C]">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>
        <div
          aria-label="Promo Elements"
          className="grid grid-cols-2 gap-5 lg:flex lg:gap-24"
        >
          {promoData.map((promo, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-2 justify-between items-center"
              initial="hidden"
              animate={controls} // Control animation based on viewport visibility
              variants={promoVariants} // Apply animation variants
            >
              <div className="flex items-center">
                <motion.img
                  aria-label="Promo Icons"
                  src={promo.src}
                  alt={promo.title}
                  className="relative"
                  whileHover={{ scale: 1.1 }} // Hover animation
                  transition={{ type: "spring", stiffness: 200, damping: 5 }}
                />
                {i < promoData.length - 1 && (
                  <div className="border hidden lg:block w-32 border-[#9c9c9c] ml-20 mx-5 absolute" />
                )}
              </div>
              <div aria-label="Icon text" className="text-center space-y-2">
                <h2
                  aria-label="Icon Title"
                  className="text-lg text-[#393939] font-medium font-['poppins']"
                >
                  {promo.title}
                </h2>
                <p
                  aria-label="Icon Subtitle"
                  className="text-[#9C9C9C] text-sm"
                >
                  {promo.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Promo;
