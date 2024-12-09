import React, { useEffect, useRef } from "react";
import ProductCard from "../similarProducts/productCard";
import { gsap } from "gsap";

function RecommendedItem() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // GSAP animation for ProductCard components
          gsap.fromTo(
            cardRefs.current,
            { opacity: 0, y: 100 }, // Initial state
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.5, // Staggered animation for cards
              ease: "power3.out",
            },
          );

          // Unobserve after animation has been triggered
          observer.unobserve(sectionRef.current);
        }
      },
      {
        root: null, // Observe within the viewport
        threshold: 0.5, // Trigger when 50% of the section is visible
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <section
      id="recommended-items"
      aria-label="Recommended Items"
      className="px-5 w-full mt-5 lg:mt-0"
      ref={sectionRef} // Reference the section for IntersectionObserver
    >
      <div className="flex items-center justify-between py-4">
        <h2 className="font-['poppins'] text-xl">
          Ces produits pourraient vous intéresser
        </h2>
        <a
          aria-label="link"
          href="link"
          className="text-xs hover:text-zinc-600 underline underline-offset-2 uppercase font-medium"
        >
          Voir toute la collection
        </a>
      </div>
      <div
        aria-label="Items"
        className="lg:grid-cols-3 w-full grid grid-cols-2 justify-center lg:justify-between items-center gap-2"
      >
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              aria-label="Items Card"
              key={index}
              className="w-[45vw] lg:w-[33vw]"
              ref={(el) => (cardRefs.current[index] = el)} // Add to refs array
            >
              <ProductCard />
            </div>
          ))}
      </div>
    </section>
  );
}

export default RecommendedItem;
