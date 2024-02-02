
function Navbar() {
  return (
    <div className="Navbar">
        <div style={{opacity: "1", top: "0px"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{paddingLeft: "40px"}}>
          <a className="navbar-brand" href="/homepage" style={{color:"white"}}>OA</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{paddingRight: "100px"}}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#/about" style={{color:"white"}} >About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/damiajayi" style={{color:"white"}}>LinkedIn</a>
              </li>
              
              <li className="nav-item">
                <a style={{color:"white"}} className="nav-link" href="#/experience">Contact Me</a>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      </div> 
      
    </div>
  );
}

export default Navbar;