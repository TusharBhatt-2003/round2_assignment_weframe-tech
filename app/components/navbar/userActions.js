import { motion } from "framer-motion";
import React from "react";

function UserActions() {
  return (
    <div
      id="user-action"
      className='flex cursor-pointer select-none w-full justify-end items-center gap-4 font-["poppins"] text-[#1f2a37] text-xs'
    >
      <div
        role="button"
        aria-label="inspirations"
        className="md:flex hidden justify-center items-center  gap-2 text-[#3b4347] hover:text-zinc-500 font-[500]"
      >
        <img src="lightbulb-01.svg" alt="lightbulb" className="w-4 h-4" />
        <p>Inspirations</p>
      </div>
      <div
        role="button"
        aria-label="Fav"
        className="md:flex hidden justify-center items-center gap-2 text-[#3b4347] hover:text-zinc-500 font-[500]"
      >
        <img src="heart.svg" alt="heart" className="w-4 h-4" />
        <p>Mes favoris</p>
        <p className="bg-[#eaedee] rounded-full px-2 ">24</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
        aria-label="Cart"
        className="bg-[#0093d0] flex justify-center items-center gap-2 text-white px-3 py-2 rounded hover:bg-[#0092d08f]"
      >
        <img src="cart.svg" alt="cart" className="w-6 h-6" />
        <p className="hidden lg:block">Panier</p>
      </motion.button>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
        aria-label="profile"
        id="profile"
        role="button"
        className="w-8 h-8 rounded-full bg-[#eaedee]"
      ></motion.div>
      <div className="lg:flex hidden gap-2">
        <p>FR</p>
        <img
          role="button"
          id="lang-dropdown"
          src="dropDown.svg"
          alt="language"
          className="w-3 h-4"
        />
      </div>
    </div>
  );
}

export default UserActions;
