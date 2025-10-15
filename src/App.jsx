import Header from './Components/Header';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WatchList from "./Pages/WatchList";

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/watchlist" element={<WatchList/>} />
      </Routes>
   
     </> 
  
  );
}

export default App;
