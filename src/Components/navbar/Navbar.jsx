import logo from "../../Assets/nav_logo.jpeg"
import "./Navbar.css"
import { Link } from "react-router-dom"

let Navbar = () => {
    return (
        <>
            <header>
                <div className="Nav_container">

                    <Link to="/" >
                        <div className="Nav_logo">
                            <img src= {logo} alt="nav logo"/>
                        </div>
                    </Link>

                    <div className="Nav_items">

                        <Link to="/">
                            <div>Home </div>
                        </Link>

                        <Link to="/services">
                            <div>
                                Services
                            </div>
                        </Link>

                        <Link to="/projects">
                            <div>
                                Projects
                            </div>
                        </Link>

                        <Link to="/FAQ">
                            <div>
                                FAQ
                            </div>
                        </Link>

                        <Link to="/aboutus">
                            <div>
                                About us
                            </div>
                        </Link>

                        <Link to="/ContactUS">
                            <div>
                                Contact Us
                            </div>
                        </Link>

                    </div>


                    <div className="Nav_btn">
                        <button>Login</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;