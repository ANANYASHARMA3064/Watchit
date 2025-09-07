// Card.jsx
import { useState } from "react";
import ShowCard from "./ShowCard";

export default function Card({ movieData, watchMovies, handleAdd, imdbID }) {
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
              onClick={() => {setIsShowCard(true);setSelectedMovieID(movie.imdbID);}} 
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <hr />
              <button
                className="adding"
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleAdd(movie.Title, movie.imdbID);
                }}
              >
                {watchMovies.includes(movie.Title) &&
                imdbID.includes(movie.imdbID) ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  <i className="fa-solid fa-plus"></i>
                )}
              </button>
              
            </div>
          ))}
        </div>
        {isShowCard && <ShowCard imdbID={selectedMovieID} onClose={()=>{setIsShowCard(false)}} handleAdd={handleAdd} watchMovies={watchMovies}/>}
      </div>

      
    </div>
  );
}
