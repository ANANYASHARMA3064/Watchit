import { useEffect, useState } from "react";

export default function Watchlist() {
  const [watchMovies, setWatchMovies] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem("watchMovies");
    if (savedMovies) setWatchMovies(JSON.parse(savedMovies));
  }, []);

  const handleRemove = (imdbID) => {
    const updated = watchMovies.filter((movie) => movie.imdbID !== imdbID);
    setWatchMovies(updated);
    localStorage.setItem("watchMovies", JSON.stringify(updated));
  };

  return (
    <div className="watchlist-page">
      <h1>Your Watchlist 🎬</h1>
      {watchMovies.length === 0 ? (
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
              <button onClick={() => handleRemove(movie.imdbID)}>❌ Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
