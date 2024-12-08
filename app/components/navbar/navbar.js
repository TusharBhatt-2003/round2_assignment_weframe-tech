"use client";
import Logo from "./logo";
import NavList from "./navList";
import SearchBar from "./searchBar";
import UserActions from "./userActions";

export default function Navbar() {
  return (
    <nav className="border-b p-4 sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center w-fit md:w-[55vw] gap-2">
          <Logo />
          <SearchBar />
        </div>
        <div className="actions md:w-[45vw] flex items-center gap-4">
          <UserActions />
        </div>
      </div>
      <NavList />
    </nav>
  );
}
