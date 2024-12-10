import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "../navbar/logo";
import { footerData, socialMediaIcons } from "@/app/data/data";
import { motion } from "framer-motion";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footerEl = footerRef.current;

    // Target all <li> elements within the footer
    const listItems = footerEl.querySelectorAll("li");

    // Initial setup for list items
    gsap.set(listItems, { y: 50, opacity: 0 });

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation
          gsap.to(listItems, {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1.5,
            ease: "elastic(2, 1)",
          });
          // Disconnect observer to ensure animation happens only once
          observer.disconnect();
        }
      });
    };

    // Create IntersectionObserver
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.3, // Trigger animation when 30% of the footer is visible
    });

    // Observe the footer
    observer.observe(footerEl);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} id="footer" className="h-[60vh]">
      <div className="flex lg:flex-row flex-col gap-10 font-['poppins'] justify-between items-center p-5 py-10 w-full h-[30vh]">
        <div className="flex gap-5">
          <div role="button" aria-label="Logo" className="hidden lg:block">
            <Logo />
          </div>
          <div aria-label="Footer Tags" className="flex gap-5 lg:gap-16">
            {footerData.map((section, i) => (
              <div key={i}>
                <h1 className="text-sm text-[#393939] font-semibold">
                  {section.title}
                </h1>
                <ul className="mt-2 space-y-1">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#555] hover:text-black"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2 p-10 lg:p-0">
          <p className="text-[#393939] text-center lg:text-end lg:mr-3 text-sm">
            NOUS SUIVRE
          </p>
          <div aria-label="Social Media" className="flex lg:items-end">
            {socialMediaIcons.map((icon, i) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                role="button"
                href={icon.link}
                key={i}
                aria-label={icon.name || "social media link"}
              >
                <img
                  src={icon.src}
                  alt={icon.name || "social media icon"}
                  className="w-[30px] h-[30px] mr-3"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
