import { useEffect,useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addMovie } from "../SupabaseFunctions";
const ShowCard = ({imdbID,onClose,handleAdd,watchMovies}) => {
    const [movieData, setMovieData] = useState(null);

    const PlotFetcher =async(imdbID)=>{
        try {
      
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${imdbID}&plot=full}`
      );
      
      const data = await response.json();
      setMovieData(data)
      console.log("plot",data)
    }catch (err) {
      console.error("API Error:", err.message);
      return null;
    }
     
}
 useEffect(() => {
    if (imdbID) {
      PlotFetcher(imdbID);
    }
  }, [imdbID]);
  return (
    <div className="fixed bg-black/60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"onClick={onClose}>
       
        <div onClick={(event) => event.stopPropagation()} 
        className="bg-gradient-to-b from-black to-[#090f33] border-2 border-white rounded-2xl shadow-xl p-6 w-[500px] max-w-[90%] text-white flex flex-col justify-center items-center">
            { movieData ?(
                <>

                 <h2 className="text-xl font-bold mb-2">{movieData.Title}</h2>
                  <img 
                src={movieData.Poster !== "N/A" ? movieData.Poster : "/placeholder.jpg"}
                alt={movieData.Title}
                className="mx-auto"
              />
            <p className="italic mb-2">Released: {movieData.Year}</p>
            <p className="mb-4">{movieData.Plot}</p>
            <p className="italic mb-2">Imdb: {movieData.imdbRating}</p>
            <p className="mb-4">Genre:{movieData.Genre}</p>
            <div className="border-t-2 border-white} ">
                <button>
                    <button
                className="adding"
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleAdd(movieData.Title, movieData.imdbID);
                }}
              >
                {watchMovies.includes(movieData.Title) &&
                imdbID.includes(movieData.imdbID) ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  <i className="fa-solid fa-plus"></i>
                )}
              </button>
                </button>
            </div>
                </>
            ):(
                <p className="text-gray-500">Loading...</p>
            )}
      </div>
    </div>
  )
}

export default ShowCard