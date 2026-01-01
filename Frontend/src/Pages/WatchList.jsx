 import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getWatchlist,addMovie,removeMovie } from "../SupabaseFunctions";

export default function Watchlist() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [watchMovies, setWatchMovies] = useState([]);

  if (isLoading) return <div>Loading...</div>;

  useEffect(() => {
     if (isAuthenticated) {
    const savedMovies = localStorage.getItem("watchMovies");
    if (savedMovies) setWatchMovies(JSON.parse(savedMovies));
  }
}, [isAuthenticated]);

  const handleRemove = (imdbID) => {
    const updated = watchMovies.filter((movie) => movie.imdbID !== imdbID);
    setWatchMovies(updated);
    localStorage.setItem("watchMovies", JSON.stringify(updated));
  };

  return (
    <div className="watchlist-page">
      <h1 className="text-center text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] transform rotate-[-1deg]">
        Your Watchlist
      </h1>

      {!isAuthenticated ? (
        <h1>LOGIN FIRST!</h1>
      ) : watchMovies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div className="movie-container">
          {watchMovies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <button onClick={() => {handleRemove(movie.imdbID);removeMovie(user,movie.imdbID)}}>❌ Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


