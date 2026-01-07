import { useState } from "react";
import ShowCard from "./ShowCard";
import { addMovie,getWatchlist} from "../SupabaseFunctions";
import { useAuth0 } from "@auth0/auth0-react";

export default function Card({ movieData, imdbID, handleAdd }) {
  const [isShowCard, setIsShowCard] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
   const [watchMovies, setWatchMovies] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!movieData || movieData.length === 0) {
    return <p>No movies found. Try another search!</p>;
  }
  const adding = async (movie,user) => {
    await addMovie(movie,user);
    const data = await getWatchlist(user);
    setWatchMovies(data);
  };

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
  onClick={async (e) => {
    e.stopPropagation();
    await adding(movie, user);
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
