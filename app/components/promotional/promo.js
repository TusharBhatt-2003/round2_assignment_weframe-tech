import { promoData } from "@/app/data/data";

function Promo() {
  return (
    <div className="w-full grid place-content-center lg:h-[65vh] bg-gradient-to-b from-[#fef7fb] to-white p-5">
      <div className="space-y-14">
        <div className="text-center space-y-3 py-5">
          <h1 className="text-4xl text-[#393939] font-medium font-['poppins']">
            On s’occupe de{" "}
            <span className="font-bold text-[#5cd2dd]">tout</span>
          </h1>
          <p className="text-[#9C9C9C]">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:flex lg:gap-24">
          {promoData.map((promo, i) => (
            <div
              key={i}
              className="flex  flex-col gap-2 justify-between items-center"
            >
              <div className="flex items-center">
                <img src={promo.src} alt={promo.title} className="relative" />
                {i < promoData.length - 1 && (
                  <div className="border hidden lg:block w-32 border-[#9c9c9c] ml-20 mx-5 absolute" />
                )}
              </div>
              <div className="text-center space-y-2 ">
                <h2 className="text-lg text-[#393939] font-medium font-['poppins']">
                  {promo.title}
                </h2>
                <p className="text-[#9C9C9C] text-sm">{promo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promo;
