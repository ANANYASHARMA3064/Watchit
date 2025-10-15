import { useEffect, useState } from "react";

export default function Watchlist() {
  const [watchMovies, setWatchMovies] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem("watchMovies");
    if (savedMovies) setWatchMovies(JSON.parse(savedMovies));
  }, []);

  const handleRemove = (index) => {
    const updated = watchMovies.filter((_, i) => i !== index);
    setWatchMovies(updated);
    localStorage.setItem("watchMovies", JSON.stringify(updated));
  };

  return (
    <div className="watchlist-page">
      <h1>Your Watchlist 🎬</h1>
      {watchMovies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <ul>
          {watchMovies.map((movie, index) => (
            <li key={index}>
              {movie}
              <button onClick={() => handleRemove(index)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
