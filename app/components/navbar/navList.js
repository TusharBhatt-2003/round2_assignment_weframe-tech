// Importing the navList data from the data file
import { navList } from "@/app/data/data";
import React, { useState } from "react";

const NavList = () => {
  // State to track the currently active nav item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle clicks and set the active index
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="lg:flex justify-between pt-5 font-['poppins'] w-full hidden">
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
  );
};

export default NavList;
