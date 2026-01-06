 import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getWatchlist,addMovie,removeMovie } from "../SupabaseFunctions";

export default function Watchlist() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [watchMovies, setWatchMovies] = useState([]);
  const [data, setData] = useState([]);


  
  useEffect(() => {
  const fetchWatchlist = async () => {
    const watchlist = await getWatchlist(user);
    setData(watchlist);
    console.log(data);
  };

  if (user) fetchWatchlist();
}, [user]);
const handleRemove = async (imdbId) => {
  await removeMovie(user, imdbId);
  const watchlist = await getWatchlist(user);
  setData(watchlist);
};
if (isLoading) return <div>Loading...</div>;
 


  return (
    <div className="watchlist-page">
      <h1 className="text-center text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] transform rotate-[-1deg]">
        Your Watchlist
      </h1>


      {!isAuthenticated ? (
        <h1>LOGIN FIRST!</h1>
      ) : data.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        
        <div className="movie-container">
          
          {data.map((movie) => (
            <div key={movie.imdb_id} className="movie-card">
              <img
                src={movie.poster !== "N/A" ? movie.poster : "/placeholder.jpg"}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <button onClick={() => {handleRemove(movie.imdb_id)}}>❌</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


