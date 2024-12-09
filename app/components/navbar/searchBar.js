const SearchBar = () => {
  return (
    <div className="search-bar w-fit lg:w-full bg-[#f9fafb] flex justify-between items-center md:gap-5 rounded-lg p-3">
      <input
        type="text"
        name="search"
        placeholder="Rechercher un produit"
        className="outline-none w-full pl-2 text-xs md:text-base bg-transparent placeholder:text-[#667482]"
      />
      <div>
        <img src="search.svg" alt="search icon" />
      </div>
    </div>
  );
};

export default SearchBar;
