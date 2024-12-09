import { ctaData } from "@/app/data/data";
import { motion } from "framer-motion";
import React from "react";
function CtaBox() {
  return (
    <div
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
