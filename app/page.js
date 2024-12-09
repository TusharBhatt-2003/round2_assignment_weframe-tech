"use client";
import {
  Navbar,
  Product,
  SimilarProduct,
  RecommendedItem,
  Promo,
  CTA,
  Footer,
} from "./components/index";
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Product />
        <SimilarProduct />
        <RecommendedItem />
        <Promo />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
