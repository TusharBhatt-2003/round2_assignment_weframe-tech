import { navList } from "@/app/data/data";
import React, { useState } from "react";

const NavList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="flex justify-between pt-5 pb-3 font-['poppins'] w-full">
      {navList.map((item, index) => (
        <a
          key={index}
          href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
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
