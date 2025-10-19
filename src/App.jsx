import Header from './Components/Header';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WatchList from "./Pages/WatchList";
import SearchPage from './Pages/MoviePage';
import Favourites from './Pages/Favourites';
function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/watchlist" element={<WatchList/>} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/Favourites" element={<Favourites/>} />


        
      </Routes>
   
     </> 
  
  );
}

export default App;
