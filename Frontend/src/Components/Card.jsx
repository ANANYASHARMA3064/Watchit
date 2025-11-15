import { useState } from "react";
import ShowCard from "./ShowCard";

export default function Card({ movieData, watchMovies, imdbID, handleAdd }) {
  const [isShowCard, setIsShowCard] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  if (!movieData || movieData.length === 0) {
    return <p>No movies found. Try another search!</p>;
  }

  return (
    <div className="parent">
      <div className="Card">
        <div className="movie-container">
          {movieData.map((movie) => (
            <div
              key={movie.imdbID}
              className="movie-card"
              onClick={() => {
                setIsShowCard(true);
                setSelectedMovieID(movie.imdbID);
              }}
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <hr />

              {/* ADD / CHECK button */}
            <button
  className="adding"
  onClick={(e) => {
    e.stopPropagation();
    handleAdd(movie); // pass full movie object
  }}
>
  {watchMovies.some((m) => m.imdbID === movie.imdbID) ? (
    <i className="fa-solid fa-check"></i>
  ) : (
    <i className="fa-solid fa-plus"></i>
  )}
</button>

            </div>
          ))}
        </div>

        {/* Popup */}
        {isShowCard && (
          <ShowCard
            imdbID={selectedMovieID}
            onClose={() => setIsShowCard(false)}
            handleAdd={handleAdd}
            watchMovies={watchMovies}
          />
        )}
      </div>
    </div>
  );
}
