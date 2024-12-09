import React from "react";
import Img from "./img";
import CtaBox from "./ctaBox";

function CTA() {
  return (
    <section
      id="CTA"
      aria-label="CTA Section"
      className="h-[40vh] w-full p-4 flex gap-4 overflow-hidden"
    >
      <Img />
      <CtaBox />
    </section>
  );
}

export default CTA;
