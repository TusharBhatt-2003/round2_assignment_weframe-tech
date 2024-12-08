import Productcard from "../similarProducts/productCard";

function RecomendedItem() {
  return (
    <div className="px-5 w-full mt-5 lg:mt-0">
      <div className="flex items-center justify-between py-4">
        <h2 className="font-['poppins'] text-xl">
          Ces produits pourraient vous intéresser
        </h2>
        <p className="text-xs underline underline-offset-2 uppercase font-medium">
          Voir toute la collection
        </p>
      </div>
      <div className="lg:grid-cols-3 w-full grid  grid-cols-2 justify-center lg:justify-between items-center gap-2 ">
        {Array(3)
          .fill(0)
          .map((index) => (
            <div className="w-[45vw] lg:w-[33vw]">
              <Productcard key={index} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecomendedItem;
