"use client";
import CTA from "./components/CTA/CTA";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import Product from "./components/productDetail/product";
import Promo from "./components/promotional/promo";
import RecomendedItem from "./components/recommendedProducts/recomendedItem";
import SimilarProduct from "./components/similarProducts/similarproduct";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="sticky top-32 z-50 bg-white flex gap-2 pl-5 py-2 items-baseline">
        <h1 className="text-[#393939]">Home</h1>
        <div className="w-2 h-2 rounded-full bg-[#e2e2e2]"></div>
        <p className="text-[#9c9c9c] font-semibold text-sm">Art de la table</p>
      </div>
      <Product />
      <SimilarProduct />
      <RecomendedItem />
      <Promo />
      <CTA />
      <Footer />
    </>
  );
}
