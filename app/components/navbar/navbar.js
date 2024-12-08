"use client";
import Logo from "./logo";
import NavList from "./navList";
import SearchBar from "./searchBar";
import UserActions from "./userActions";

export default function Navbar() {
  return (
    <nav className="border-b pt-4 px-4">
      <div className="flex justify-between items-center">
        <div className="flex w-[55vw] gap-2">
          <Logo />
          <SearchBar />
        </div>
        <div className="actions w-[45vw] flex items-center gap-4">
          <UserActions />
        </div>
      </div>
      <NavList />
    </nav>
  );
}
