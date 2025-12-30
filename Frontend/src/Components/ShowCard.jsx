import { useEffect, useState } from "react";
import { addMovie } from "../SupabaseFunctions";
import { useAuth0 } from "@auth0/auth0-react";
const ShowCard = ({ imdbID, onClose, handleAdd, watchMovies }) => {
  const [movieData, setMovieData] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const PlotFetcher = async (id) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}&plot=full`
      );
      const data = await response.json();
      setMovieData(data);
    } catch (err) {
      console.error("API Error:", err.message);
    }
  };

  useEffect(() => {
    if (imdbID) {
      PlotFetcher(imdbID);
    }
  }, [imdbID]);

  return (
    <div
      className="fixed bg-black/60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-b from-black to-[#090f33] border-2 border-white rounded-2xl shadow-xl p-6 w-[500px] max-w-[90%] text-white flex flex-col items-center"
      >
        {movieData ? (
          <>
            <h2 className="text-xl font-bold mb-2">{movieData.Title}</h2>

            <img
              src={
                movieData.Poster !== "N/A"
                  ? movieData.Poster
                  : "/placeholder.jpg"
              }
              alt={movieData.Title}
              className="mx-auto mb-2"
            />

            <p className="italic mb-1">Released: {movieData.Year}</p>
            <p className="mb-2">{movieData.Plot}</p>
            <p className="italic mb-1">IMDb: {movieData.imdbRating}</p>
            <p className="mb-4">Genre: {movieData.Genre}</p>

            <div className="border-t-2 border-white pt-4">
              <button
                className="adding"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAdd(movieData);
                  addMovie(movieData,user.sub);
                }}
              >
                {watchMovies.some(m => m.imdbID === movieData.imdbID) ? (
  <i className="fa-solid fa-check"></i>
) : (
  <i className="fa-solid fa-plus"></i>
)}
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ShowCard;
