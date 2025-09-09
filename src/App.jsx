import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WatchList from "./Pages/WatchList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </>
  );
}

export default App;
