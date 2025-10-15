import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const [movieName, setMovieName] = useState('');
  const [displayNav, setDisplayNav] = useState(true);
  const [displayCard, setDisplayCard] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [watchMovies, setWatchMovies] = useState([]);
  const [imdbID, setImdbID] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem('watchMovies');
    if (savedMovies) {
      setWatchMovies(JSON.parse(savedMovies));
    }
  }, []);

  useEffect(() => {
    if (watchMovies.length > 0) {
      localStorage.setItem('watchMovies', JSON.stringify(watchMovies));
    }
  }, [watchMovies]);

  const MovieFetcher = async (title) => {
    if (!title.trim()) return null;

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${title}`
      );

      const data = await response.json();
      if (data.Response === "True") {
        return data.Search;
      } else {
        throw new Error(data.Error);
      }
    } catch (err) {
      console.error("API Error:", err.message);
      return null;
    }
  };

  function handleAdd(value, value2) {
    setWatchMovies((prev) => [value, ...prev]);
    setImdbID((prev) => [value2, ...prev]);
  }

  const handleSearchButton = async () => {
    if (!movieName.trim()) {
      alert("Please enter a movie name!");
      return;
    }

    try {
      const fetchedMovieData = await MovieFetcher(movieName);
      setMovieData(fetchedMovieData);
      setDisplayCard(true);
    } catch (error) {
      console.error(error.message);
      setMovieData(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchButton();
    }
  };


  function handleCross(index) {
    setWatchMovies((prev) => prev.filter((_, i) => i !== index));
  }

  return (

    <>
      <hr />
      {displayNav && (
        <div className="Navbar">
          <input
            type="text"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter movie name"
          />

          <button onClick={handleSearchButton}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      )}

      {displayCard && (
        <Card
          movieData={movieData}
          watchMovies={watchMovies}
          handleAdd={handleAdd}
          imdbID={imdbID}
        />
      )}
    </>
  );
}
