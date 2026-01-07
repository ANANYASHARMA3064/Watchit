import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
export default function SearchPage() {
  const { keyword } = useParams(); // dynamic search keyword
  const [movieData, setMovieData] = useState([]);
  const [watchMovies, setWatchMovies] = useState([]);
  const [imdbID, setImdbID] = useState([]);
function handleAdd(movie) {
  setWatchMovies((prev) => {
    // Avoid duplicates by checking imdbID
    if (prev.some((m) => m.imdbID === movie.imdbID)) return prev;
    const updated = [movie, ...prev];
    localStorage.setItem("watchMovies", JSON.stringify(updated));
    return updated;
  });
}

  useEffect(() => {
    const fetchMovies = async () => {
      if (!keyword) return;

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${keyword}`
        );
        const data = await response.json();
        if (data.Response === "True") setMovieData(data.Search);
        else setMovieData([]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, [keyword]);

  return (
    <>
    <Navbar/>
    
<Card
  movieData={movieData}
         // make sure it's always an array
  imdbID={imdbID}
  
  
/>
</>
  );
}
