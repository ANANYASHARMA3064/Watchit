import { supabase } from './SupabaseClient.js'
export async function addMovie(movie,user){
    const {data,error} = await supabase
        .from('watchlist')
        .insert([{user_id: user.sub,
      imdb_id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }])
    if (error) console.error(error);
  else console.log('Added movie:', data);
}
export async function removeMovie(user, imdb_id) {
  const { data, error } = await supabase
    .from('watchlist')
    .delete()
    .eq('user_id', user.sub)
    .eq('imdb_id', imdb_id);

  if (error) console.error(error);
  else console.log('Removed movie:', data);
}
export async function getWatchlist(user) {
  const { data, error } = await supabase
    .from('watchlist')
    .select('*')
    .eq('user_id', user.sub);

  if (error) console.error(error);
  else return data; // Array of movies
}

