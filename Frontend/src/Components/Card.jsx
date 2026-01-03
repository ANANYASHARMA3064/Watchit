import { useState } from "react";
import ShowCard from "./ShowCard";
import { addMovie} from "../SupabaseFunctions";
import { useAuth0 } from "@auth0/auth0-react";

export default function Card({ movieData, watchMovies, imdbID, handleAdd }) {
  const [isShowCard, setIsShowCard] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

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
              <hr/>

              {/* ADD / CHECK button */}
            <button
  className="adding"
  onClick={(e) => {
    e.stopPropagation();
    if (!isAuthenticated || !user) {
    alert("Please log in to add movies");
    return;
  }

  if (watchMovies.some((m) => m.imdbID === movie.imdbID)) {
    return; // already added, do nothing
  }

  handleAdd(movie);
  addMovie(movie, user);
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
