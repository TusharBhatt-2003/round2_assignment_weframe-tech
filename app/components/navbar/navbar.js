"use client";

import Logo from "./logo";
import NavList from "./navList";
import SearchBar from "./searchBar";
import UserActions from "./userActions";
import { useState } from "react";
import { navList } from "@/app/data/data"; // Assuming navList is imported here

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="border-b p-4 sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center w-fit md:w-[55vw] gap-2">
          <Logo />
          <SearchBar />
        </div>
        <div className="actions md:w-[45vw] flex items-center gap-4">
          <UserActions />
        </div>
      </div>
      <NavList activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className="bg-white flex gap-2 pt-2 items-baseline">
        <h1 className="text-[#393939]">Home</h1>
        <div className="w-2 h-2 rounded-full bg-[#e2e2e2]"></div>
        <p className="text-[#9c9c9c] font-semibold text-sm">
          {navList[activeIndex]}
        </p>
      </div>
    </nav>
  );
}
