import React from "react";
import { navList } from "@/app/data/data";

const NavList = ({ activeIndex, setActiveIndex }) => {
  // Function to handle clicks and set the active index
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav className="hidden lg:flex justify-between pt-5 font-['poppins'] w-full">
        {navList.map((item, index) => (
          <a
            key={index}
            href={`#${item.replace(/\s+/g, "-").toLowerCase()}`} // Dynamically setting href based on item name
            className={`text-xs ${
              activeIndex === index
                ? "text-[#0093d0] font-semibold"
                : "text-gray-500"
            } hover:text-gray-700`}
            onClick={() => handleClick(index)}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile navigation as a horizontal slider */}
      <nav className="flex lg:hidden overflow-x-scroll whitespace-nowrap space-x-4 pt-5 font-['poppins'] w-full scrollbar-hide">
        {navList.map((item, index) => (
          <a
            key={index}
            href={`#${item.replace(/\s+/g, "-").toLowerCase()}`} // Dynamically setting href based on item name
            className={`text-xs ${
              activeIndex === index
                ? "text-[#0093d0] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => handleClick(index)}
          >
            {item}
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavList;
