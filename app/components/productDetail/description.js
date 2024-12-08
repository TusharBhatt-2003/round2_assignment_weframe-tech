import { description } from "@/app/data/data";
import React from "react";

function Description() {
  return (
    <div className="hidden lg:block p-5 mx-5 h-[25vh]">
      <h1 className="mb-2">{description.title}</h1>
      <p className='text-[0.6rem] text-[#9c9c9c] font-["poppins"]'>
        {description.description}
      </p>
    </div>
  );
}

export default Description;
