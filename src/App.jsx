import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Card from './Components/Card';
import SideBar from './Components/Sidebar';
import './App.css';

function App() {
  const [movieName, setMovieName] = useState('');
  const [displayMovies, setDisplayMovies] = useState(false);
  const [displayNav, setDisplayNav] = useState(true);
  const [displayCard, setDisplayCard] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [watchMovies, setWatchMovies] = useState([])
  useEffect(() => {
    const savedMovies = localStorage.getItem('watchMovies');
    if (savedMovies) {
      setWatchMovies(JSON.parse(savedMovies)); // If data exists, load it into state
    }
  }, []);

  // Save watchMovies to localStorage every time it changes
  useEffect(() => {
    if (watchMovies.length > 0) {
      localStorage.setItem('watchMovies', JSON.stringify(watchMovies));
    }
  }, [watchMovies]);

  function handleDisplay() {
    setDisplayMovies(!displayMovies);
  }

  function handleSearch(event) {
    setMovieName(event.target.value);
  }

  function handleNav() {
    setDisplayNav(!displayNav);
  }

  const MovieFetcher = async (title) => {
    if (!title.trim()) return null; // Prevent empty searches

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=bd86916e&s=${title}`
      );
      const data = await response.json();

      if (data.Response === 'True') {
        return data.Search; // Return the movies array
      } else {
        throw new Error(data.Error);
      }
    } catch (err) {
      console.error("API Error:", err.message);
      return null;
    }
  };
  function handleAdd(value) {
    setWatchMovies(prev => [value, ...prev]);
}
  useEffect(() => {
    console.log("Updated watchMovies:", watchMovies);
  }, [watchMovies])
  const handleSearchButton = async () => {
    if (!movieName.trim()) {
      alert("Please enter a movie name!");
      return;
    }
 
    try {
      const fetchedMovieData = await MovieFetcher(movieName);
      setMovieData(fetchedMovieData); // Update state
      setDisplayCard(true);
    } catch (error) {
      console.error(error.message);
      setMovieData(null);
    }
  };



  // ✅ Log movieData whenever it updates
  useEffect(() => {
    console.log("Updated movieData:", movieData);
  }, [movieData]);
  function handleCross(index) {
    setWatchMovies(prev => prev.filter((_, i) => i !== index));
}
  return (
    <>
      <Header handleDisplay={handleDisplay} handleNav={handleNav} />
      <hr />
      {displayNav && (
        <div className="Navbar">
          <input
            type="text"
            value={movieName}
            onChange={handleSearch}
            placeholder="Enter movie name"
          />

          <button onClick={handleSearchButton}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      )}
      {displayMovies && (
        <SideBar handleDisplay={handleDisplay} handleNav={handleNav}  watchMovies={watchMovies}handleCross={handleCross} />
      )}
      {displayCard && <Card movieData={movieData} watchMovies={watchMovies} handleAdd={handleAdd} />}
    </>
  );
}

export default App;



