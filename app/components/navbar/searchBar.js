const SearchBar = () => {
  return (
    <div className="search-bar h-10 w-full bg-[#f9fafb] flex justify-between items-center gap-5 rounded-lg p-3">
      <input
        type="text"
        placeholder="Rechercher un produit"
        className="outline-none pl-2 bg-transparent placeholder:text-[#667482] placeholder:text-sm"
      />
      <div>
        <img src="search.svg" />
      </div>
    </div>
  );
};

export default SearchBar;
