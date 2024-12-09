"use client";
import { faq } from "@/app/data/data";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const FAQ = () => {
  const controls = useAnimation(); // Framer Motion animation controls
  const sectionRef = useRef(null); // Reference for the FAQ section
  const [hasAnimated, setHasAnimated] = useState(false); // Track animation state

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible"); // Start animation when visible
          setHasAnimated(true); // Mark as animated
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, [controls, hasAnimated]);

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 100 }, // Initial state
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.5, duration: 0.5 }, // Staggered animation
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div
      id="faq"
      aria-label="FAQ"
      className="my-5 w-full lg:w-[45vw] h-[25vh] overflow-hidden"
      ref={sectionRef} // Reference the section for IntersectionObserver
    >
      {faq?.length ? (
        <motion.div
          initial="hidden"
          animate={controls} // Control animation based on viewport visibility
          variants={containerVariants} // Apply container variants
        >
          {faq.map((faq, i) => (
            <motion.div
              key={i}
              variants={itemVariants} // Apply item-specific animation
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              className="flex justify-between bg-[#fcf9f9] text-[#393939] uppercase rounded-lg py-4 px-5"
            >
              <h4>{faq}</h4>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.7 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                role="button"
                src="plus.svg"
                alt="plus"
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p>No FAQs available.</p>
      )}
    </div>
  );
};

export default FAQ;
