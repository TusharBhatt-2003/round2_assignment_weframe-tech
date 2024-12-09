import { motion } from "framer-motion";
import React from "react";

const AddToCartBtn = () => {
  return (
    <motion.button
      //  whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 10,
      }}
      id="add-to-cart-btn"
      aria-label="Add to Cart"
      className="border uppercase font-semibold bg-[#5CD2DD] text-white rounded-lg w-[70%] flex p-3 justify-around gap-5 items-center "
    >
      Ajouter au panier
    </motion.button>
  );
};

export default AddToCartBtn;
