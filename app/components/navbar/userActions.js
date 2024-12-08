import React from "react";

function UserActions() {
  return (
    <div className='flex w-full justify-end items-center gap-4 font-["poppins"] text-[#1f2a37] text-xs'>
      <div className="md:flex hidden gap-2 text-[#3b4347] font-[500]">
        <img src="lightbulb-01.svg" />
        Inspirations
      </div>
      <div className="md:flex hidden justify-center items-center gap-2 text-[#3b4347] font-[500]">
        <img src="heart.svg" />
        Mes favoris
        <p className="bg-[#eaedee] rounded-full px-2 ">24</p>
      </div>
      <button className="bg-[#0093d0] flex justify-center items-center gap-2 text-white px-3 py-2 rounded hover:bg-[#0092d08f]">
        <img src="cart.svg" />
        <p className="hidden lg:block">Panier</p>
      </button>
      <div className="w-8 h-8 rounded-full bg-[#eaedee]"></div>
      <div className="lg:flex hidden gap-2">
        <p>FR</p>
        <img src="dropDown.svg" />
      </div>
    </div>
  );
}

export default UserActions;
