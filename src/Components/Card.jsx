
export default function Card({movieData,watchMovies,handleAdd,imdbID}){
    if (!movieData || movieData.length === 0) {
        return <p>No movies found. Try another search!</p>;
      }
         

    return(
        <div className="parent">
        <div className="Card">
        <div className="movie-container">
 {movieData.map((movie) => (
        <div key={movie.imdbID} className="movie-card" onClick={()=>{}}>
          <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <hr></hr>
         
          <button className="adding" onClick={() => handleAdd(movie.Title,movie.imdbID)}>
           {watchMovies.includes(movie.Title)&&imdbID.includes(movie.imdbID) ?
           (<i class="fa-solid fa-check"></i>)
  
  :(<i className="fa-solid fa-plus"></i>)
  } 
</button>
          
        </div>
      ))}
    </div>
       
    </div>
    </div>
    )
    

}