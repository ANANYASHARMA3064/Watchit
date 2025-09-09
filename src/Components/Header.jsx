import { Routes, Route, Link } from "react-router-dom";
export default function Header({ handleDisplay,handleNav,handleBack}) {
  
    return (
     
      <header>
         <button className="border-2 rounded-4xl p-2" onClick={()=>handleBack()} >
       <i class="fa-solid fa-house"></i>
      </button>
        <div className="headercomponents">
          <div className="logo">
            <i className="fa-solid fa-couch"></i>
            <h1>Watchit</h1>
          </div>
          <button onClick={()=>{handleDisplay();handleNav();}}>
            <i className="fa-solid fa-clapperboard"></i>
          </button>
        </div>
         <Link to="/watchlist">WatchList</Link>
      </header>
    );
  }
  