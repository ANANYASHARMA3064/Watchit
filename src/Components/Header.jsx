import { Link } from "react-router-dom";
  const handleHome = () => {
    setDisplayCard(false);
    setDisplayMovies(false);
  };

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-white bg-black shadow-md">
      {/* Home Button */}
      <Link to ='/'>
        <button
        className="border-2 rounded-full p-2 hover:bg-gray-800 transition"
        
      >
        <i className="fa-solid fa-house"></i>
      </button>
      </Link>
      

      {/* Logo */}
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-couch text-lg"></i>
        <h1 className="text-xl font-light">Watchit</h1>
      </div>

      {/* Watchlist Link */}
      <Link
        to="/watchlist"
        className="px-4 py-2 border-2 border-gray-400 rounded-full hover:bg-gray-800 transition"
      >
        Watchlist
      </Link>
    </header>
  );
}
