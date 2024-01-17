
function Navbar() {
  return (
    <div className="Navbar">
        <div style={{opacity: "1", top: "0px"}}>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" style={{paddingLeft: "40px"}}>
          <a class="navbar-brand" href="/Homepage" style={{color:"white"}}>OA</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div class="collapse navbar-collapse " id="navbarSupportedContent" style={{paddingRight: "100px"}}>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="./about" style={{color:"white"}} >About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/damiajayi" style={{color:"white"}}>LinkedIn</a>
              </li>
              
              <li class="nav-item">
                <a style={{color:"white"}} class="nav-link disabled" href="#">Contact Me</a>
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