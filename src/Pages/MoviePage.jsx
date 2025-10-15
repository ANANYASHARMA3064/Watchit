import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
export default function SearchPage({ watchMovies, handleAdd }) {
  const { keyword } = useParams(); // dynamic search keyword
  const [movieData, setMovieData] = useState([]);

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
  watchMovies={watchMovies || []}          // make sure it's always an array
  handleAdd={handleAdd}
  imdbID={(watchMovies || []).map((m) => m.imdbID)}
/>
</>
  );
}
