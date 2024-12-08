const SearchBar = () => {
  return (
    <div className="search-bar w-fit lg:w-full bg-[#f9fafb] flex justify-between items-center md:gap-5 rounded-lg p-3">
      <input
        type="text"
        placeholder="Rechercher un produit"
        className="outline-none w-fit pl-2 text-xs md:text-base bg-transparent placeholder:text-[#667482]"
      />
      <div>
        <img src="search.svg" />
      </div>
    </div>
  );
};

export default SearchBar;
