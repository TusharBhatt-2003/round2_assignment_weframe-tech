import React from "react";
import Img from "./img";
import CtaBox from "./ctaBox";

function CTA() {
  return (
    <div className="h-[40vh] w-full p-4 flex gap-4">
      <Img />
      <CtaBox />
    </div>
  );
}

export default CTA;
