"use client";
import Navbar from "./components/navbar/navbar";
import Product from "./components/productDetail/product";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex gap-2 p-4 items-baseline">
        <h1 className="text-[#393939]">Home</h1>
        <div className="w-2 h-2 rounded-full bg-[#e2e2e2]"></div>
        <p className="text-[#9c9c9c] font-semibold text-sm">Art de la table</p>
      </div>
      <Product />
    </>
  );
}
