import React from "react";

function Img() {
  return (
    <div
      aria-label="CTA Image"
      className="hidden  w-[40%] lg:grid place-content-center overflow-hidden rounded-xl"
    >
      <img
        src="ctaImg.jpeg"
        alt="CTA Image"
        className="bg-cover h-full w-full transform scale-x-[-1]" // mirror image as in the figma design
      />
    </div>
  );
}

export default Img;
