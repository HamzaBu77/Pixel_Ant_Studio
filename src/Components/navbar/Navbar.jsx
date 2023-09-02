import { Link } from "react-router-dom";
import logo from "../../Assets/nav_logo.jpeg"
import "./Navbar.css";

let Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg p-3">

      <div className="container-fluid d-flex ">

        <div >
        <Link to="/" ><img className="logo" src={logo} alt="nav logo"/></Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"

        >
          <i className="fa-solid fa-bars Toggle_icon"></i>
        </button>

        <div className="collapse navbar-collapse justify-content-evenly" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active-link" to="/" exact>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active-link" to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active-link" to="/contact">CONTACT US</Link>
            </li>
          </ul>
          <div >
            <Link to="/login">
              <button className="rounded-pill " id="Btn-orange" type="button"><i class="fa-regular fa-user"></i>Login</button>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
