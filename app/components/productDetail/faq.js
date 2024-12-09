import { faq } from "@/app/data/data";
import React from "react";

const FAQ = () => {
  return (
    <div id="faq" aria-label="FAQ" className="my-5 w-full lg:w-[45vw] h-[25vh]">
      {faq?.length ? (
        faq.map((faq, i) => (
          <div
            key={i}
            className="flex justify-between bg-[#fcf9f9] text-[#393939] uppercase rounded-lg py-4 px-5"
          >
            <h4>{faq}</h4>
            <img role="button" src="plus.svg" alt="plus" />
          </div>
        ))
      ) : (
        <p>No FAQs available.</p>
      )}
    </div>
  );
};

export default FAQ;
