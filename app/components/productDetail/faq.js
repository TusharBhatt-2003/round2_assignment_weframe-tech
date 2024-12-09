import { faq } from "@/app/data/data";
import { motion } from "framer-motion";
import React from "react";

const FAQ = () => {
  return (
    <div id="faq" aria-label="FAQ" className="my-5 w-full lg:w-[45vw] h-[25vh]">
      {faq?.length ? (
        faq.map((faq, i) => (
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            key={i}
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
        ))
      ) : (
        <p>No FAQs available.</p>
      )}
    </div>
  );
};

export default FAQ;
