export default function Header({ handleDisplay,handleNav}) {
    return (
      <header>
        <div className="headercomponents">
          <div className="logo">
            <i className="fa-solid fa-couch"></i>
            <h1>Watchit</h1>
          </div>
          <button onClick={()=>{handleDisplay();handleNav();}}>
            <i className="fa-solid fa-clapperboard"></i>
          </button>
        </div>
      </header>
    );
  }
  