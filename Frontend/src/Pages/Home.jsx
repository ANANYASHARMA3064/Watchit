
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

export default function Home() {
  // const [movieName, setMovieName] = useState('');
  // const navigate = useNavigate();

  // const handleSearch = () => {
  //   if (!movieName.trim()) return alert("Enter a movie name!");
  //   navigate(`/search/${encodeURIComponent(movieName)}`);
  // };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") handleSearch();
  // };
  

  return (
    <>
      <Navbar/>
      {/* <div className="Navbar">
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter movie name"
        />
        <button onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div> */}
    </>
  );
}
