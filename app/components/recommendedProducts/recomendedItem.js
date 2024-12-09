import Productcard from "../similarProducts/productCard";

function RecomendedItem() {
  return (
    <section
      id="recommended-items"
      aria-label="Recommended Items"
      className="px-5 w-full mt-5 lg:mt-0"
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
        className="lg:grid-cols-3 w-full grid  grid-cols-2 justify-center lg:justify-between items-center gap-2 "
      >
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              aria-label="Items Card"
              key={index}
              className="w-[45vw] lg:w-[33vw]"
            >
              <Productcard />
            </div>
          ))}
      </div>
    </section>
  );
}

export default RecomendedItem;
