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
      <main id="main-content">
        <Product />
        <SimilarProduct />
        <RecomendedItem />
        <Promo />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
