import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md">
        {/* LEFT SIDE - Logo */}
        <Link to="/" className="flex items-center gap-2">
          <i className="fa-solid fa-couch text-xl"></i>
          <h1 className="text-2xl font-light tracking-wide">Watchit</h1>
        </Link>

        {/* RIGHT SIDE - Links */}
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-lg font-semibold hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/watchlist" className="text-lg font-semibold hover:text-gray-400 transition">
            Watchlist
          </Link>
          <Link to="/Favourites" className="text-lg font-semibold hover:text-gray-400 transition">
            Favourites
          </Link>
          <LoginButton />
        </div>
      </header>

      {/* Small line below header */}
      <div className="h-[2px] bg-gray-700 w-full"></div>
    </>
  );
}
