export default function SideBar({handleNav,handleDisplay,watchMovies,handleCross}){
    const moviesToWatch=[...new Set(watchMovies)];
    
    return(
        <>
        <div className="sidebar" onClick={()=>{handleDisplay();handleNav();}}>
            
            <div className="sidebarcontent" onClick={(e) => e.stopPropagation()}>
                <div className="sidehead">
                <button onClick={()=>{handleDisplay();handleNav();}}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="watchList">
                <h2>WATCHLIST</h2>
               
                </div>
            </div>
            <ul>
  {moviesToWatch.map((movie,Originalindex) => (
    <li key={Originalindex}>
        <hr></hr>
      <span>{movie}</span>
      <button onClick={()=>{handleCross(Originalindex);}}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </li>
  ))}
</ul>

        
               
               


               
                
               
                </div>
            

        </div>
        </>
    )

}