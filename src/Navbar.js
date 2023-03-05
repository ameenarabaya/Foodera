import logo from './images/logo.png';
import './Navbar.css';
function Navbar(){
    return(
        <>
  <nav className="navbar navbar-expand-lg nav position-fixed shadow-sm">
  <div className="container">
    <a className="navbar-brand logo" href="#"><img className='img-logo' src={logo}></img></a>
    <div className="collapse navbar-collapse all" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-list">
        <li className="nav-item li-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item li-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item li-item">
          <a className="nav-link" href="#">Explore Foods</a>
        </li>
        <li className="nav-item li-item">
          <a className="nav-link" href="#">Reviews</a>
        </li>
        <li className="nav-item li-item">
          <a className="nav-link" href="#">FAQ</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}
export default Navbar;